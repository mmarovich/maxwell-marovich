import React, { Component } from 'react';

import Landing from '../../components/Landing';
import About from '../../components/About';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
      <div className="main-container" style={{backgroundColor: 'black'}}>
        <Landing view={{height: this.state.height, width: this.state.width}} />
        <About />
      </div>
    )
  }
}

export default Main;
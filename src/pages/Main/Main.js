import React, { Component } from 'react';

import { Landing, About } from '../../components/main';

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
    const { height, width } = this.state;
    return(
      <div className="main-container page" style={{backgroundColor: 'black', overflow: 'hidden'}}>
        <Landing view={{height, width}} />
        <About view={{height, width}} />
      </div>
    )
  }
}

export default Main;
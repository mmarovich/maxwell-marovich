import React, { Component } from 'react';

import { Landing, About } from '../../components/main';
import QuotesModal from '../../components/modals/Quotes/QuotesModal.js';


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
      visible: false,
      closed: false,
    };
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
    console.log(this.state.visible)
  }

  handleModal = () => {
    this.setState({ visible: this.state.visible ? false : true, closed: this.state.visible ? true : false });
  }

  render() {
    const { height, width, visible, closed } = this.state;
    return (
      <div className="main-container page" style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <Landing view={{ height, width }} />
        <About view={{ height, width }} handleModal={this.handleModal} />
        <QuotesModal view={{height, width}} handleModal={this.handleModal} visible={visible} closed={closed} />

      </div>
    )
  }
}

export default Main;
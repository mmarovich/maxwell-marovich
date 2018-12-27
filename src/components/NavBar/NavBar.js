import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <Bounce right when={this.props.showNavbar}>
        <div className="navbar-container" style={{zIndex: 100, pointerEvents: this.props.showNavbar ? null : 'none'}}>

        </div>
      </Bounce>
    )
  }
}

export default NavBar;
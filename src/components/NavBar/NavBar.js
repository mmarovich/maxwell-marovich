import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import './NavBar.css';

class NavBar extends Component {

  render() {
    console.log(this.props.showNavbar)
    return (
      <Slide right when={this.props.showNavbar}>
        <div className="navbar-container">

        </div>
      </Slide>
    )
  }
}

export default NavBar;
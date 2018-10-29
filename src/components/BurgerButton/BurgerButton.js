import React, { Component } from 'react';

import { Slider } from 'react-burgers'

class BurgerButton extends Component {

  render() {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 100
      }}>
        <Slider
          onClick={() => {
            this.props.handleBurger();
            this.props.showNavbar();
          }}
          active={this.props.active}
          color={'rgba(120, 28, 46, 1)'}
        />
      </div>
    )
  }
}

export default BurgerButton;
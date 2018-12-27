import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import NavBar from '../components/NavBar';
import BurgerButton from '../components/BurgerButton';
import { Main, Experience } from '../pages';

class Routes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNavbar: false,
      burgerActive: false,
    }
  }

  handleBurger = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }

  showNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar })
  }

  getPathDepth = (location) => {
    let pathArr = (location || {}).pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar showNavbar={this.state.showNavbar} />
          <BurgerButton showNavbar={this.showNavbar} handleBurger={this.handleBurger} active={this.state.burgerActive} />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/experience" component={Experience} />
          </Switch>

        </Fragment>
      </Router>
    )
  }
}

export default Routes;
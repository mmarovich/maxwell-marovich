import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from '../components/NavBar';
import BurgerButton from '../components/BurgerButton';
import Main from '../pages/Main';

class Routes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNavbar: false,
      burgerActive: false,
    }
  }

  handleBurger = () => {
    console.log('hello')
    this.setState({burgerActive: !this.state.burgerActive})
  }

  showNavbar = () => {
    console.log('hello');
    console.log(this.state.showNavbar)
    this.setState({showNavbar: !this.state.showNavbar})
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar showNavbar={this.state.showNavbar} />
          <BurgerButton showNavbar={this.showNavbar} handleBurger={this.handleBurger} active={this.state.burgerActive} />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default Routes;
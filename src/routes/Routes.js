import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import NavBar from '../components/NavBar';
import BurgerButton from '../components/BurgerButton';
import { Main, Resume } from '../pages';

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

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar showNavbar={this.state.showNavbar} closeNavbar={this.showNavbar} handleBurger={this.handleBurger} />
          <BurgerButton showNavbar={this.showNavbar} handleBurger={this.handleBurger} active={this.state.burgerActive} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/resume" component={Resume} />
          </Switch>

        </Fragment>
      </Router>
    )
  }
}

export default Routes;
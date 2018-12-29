import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Link, withRouter } from 'react-router-dom';
import { IoMdHome, IoMdPaper } from 'react-icons/io';

import navOptions from './options';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      iconSize: 40,
      navOptions: [],
      hovered: ""
    }
  }

  componentDidMount() {
    this.setState({ navOptions })
  }

  iconSizeChange = (index) => {
    this.setState({ hovered: index })
  }

  renderOptions = () => {
    const { closeNavbar, handleBurger } = this.props

    const correctOptions = this.state.navOptions.filter((option, i) => {
      return option.path !== this.props.location.pathname;
    })

    return correctOptions.map((option, i) => {
      let icon;
      switch(option.to) {
        case 'Home':
          icon = <IoMdHome color="lightblue" size={this.state.hovered === option.index ? 50 : 40} style={{ margin: '0 20px', transition: 'all 0.5s' }} />
          break;
        case 'Resume':
          icon = <IoMdPaper color="lightblue" size={this.state.hovered === option.index ? 50 : 40} style={{ margin: '0 20px', transition: 'all 0.5s' }} />
          break;
        default:
          return null;
      }

      return <div key={i} style={{ textAlign: 'center' }}>
        <Link
          to={option.path}
          style={{ textDecoration: 'none' }}
          onMouseEnter={() => this.iconSizeChange(option.index)}
          onMouseLeave={() => this.setState({hovered: ""})}
          onClick={() => {
            closeNavbar();
            handleBurger();
          }}>
          {icon}
          <p style={{ color: 'lightblue', margin: 0 }}>{option.to}</p>
        </Link>
      </div>
    })
  }

  render() {
    const { showNavbar } = this.props
    return (
      <Bounce right when={showNavbar}>
        <div
          className="navbar-container"
          style={{
            zIndex: 100,
            pointerEvents: showNavbar ? null : 'none',
          }}>
          <div style={{
            display: 'flex', flex: 1, marginRight: '70px', justifyContent: 'flex-end',
            alignItems: 'center',
          }}>

            {this.renderOptions()}

          </div>
        </div>
      </Bounce>
    )
  }

}


export default withRouter(NavBar);
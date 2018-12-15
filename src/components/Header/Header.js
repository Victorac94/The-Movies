import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Header.css';
import * as actions from '../../store/actions/generalActions';
import Menu from '../../containers/Menu/Menu';

class Header extends Component {
  state = {
    menuIsShowing: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {menuIsShowing: !prevState.menuIsShowing}
    })
  };

  render() {
    return (
      <div className="Header">
        <span
        className={this.props.generalState.inDetails ? "Header__goBack icon-angle-left" : "Header__goBack icon-angle-left hidden"}
        onClick={this.props.onHideDetails}></span>
        <p className="Header__title">{this.props.generalState.title}</p>
        <div
        className={this.state.menuIsShowing ? "menu__button close-button" : "menu__button"}
        onClick={this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Menu toggleMenu={this.toggleMenu} menuIsShowing={this.state.menuIsShowing}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    generalState: state.generalReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHideDetails: () => dispatch(actions.goBack())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

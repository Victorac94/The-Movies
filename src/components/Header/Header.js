import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../assets/styles-icons.css'
import getUrlSections from '../../shared/getUrlSections';
import classes from './Header.module.css';
import genres from '../../shared/decodeGenre';
import { appContext } from '../../context/AppContext';
import * as actions from '../../store/actions/actionTypes';

const Header = React.memo((props) => {
  const [title, setTitle] = useState(null);
  const app = useContext(appContext);
  const location = useLocation();
  const history = useHistory();

  // Set header title
  useEffect(() => {
    let [mode, headerTitle, optional] = getUrlSections(location.pathname);

    if (!mode) return;

    if (mode === 'search') {
      headerTitle = 'Search';
    } else if (optional === 'details') {
      headerTitle = 'Details';
    } else {
      headerTitle = genres[mode][headerTitle];
    }
    setTitle(headerTitle);
  }, [location.pathname]);

  // Show / hide menu
  const toggleMenu = () => {
    if (props.appReducer.isMenuShowing) {
      props.hideMenu();

    } else {
      props.showMenu();
    }
  }

  // These classes make menu show / hide
  const menuClasses = props.appReducer.isMenuShowing ? [classes.menu, classes.show].join(' ') : classes.menu;

  return (
    <header className={classes.header}>
      <button className={classes.go__back} onClick={() => history.goBack()}>
        <i className="icon-angle-left"></i>
        {app.language === 'en' ? 'Back' : 'Atrás'}
      </button>
      <h2>{title}</h2>
      <div className={menuClasses} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
});

const mapStateToProps = state => {
  return {
    appReducer: state.appReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showMenu: () => dispatch({ type: actions.SHOW_MENU }),
    hideMenu: () => dispatch({ type: actions.HIDE_MENU })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

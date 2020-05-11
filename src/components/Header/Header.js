import React, { useEffect, useState, useContext } from 'react';

import '../../assets/styles-icons.css'
import getUrlSections from '../../shared/getUrlSections';
import classes from './Header.module.css';
import genres from '../../shared/decodeGenre';
import { appContext } from '../../context/AppContext';

const Header = (props) => {
  const [title, setTitle] = useState(null);
  const app = useContext(appContext);

  // Set header title
  useEffect(() => {
    let [mode, headerTitle, details] = getUrlSections(props.path);

    if (!mode) return;

    if (details) {
      headerTitle = 'Details';
    } else {
      headerTitle = genres[mode][headerTitle];
    }
    setTitle(headerTitle);
  }, [props.path]);

  const toggleMenu = event => {
    if (app.isMenuShowing) {
      app.hideMenu();

    } else {
      app.showMenu();
    }
  }

  const menuClasses = app.isMenuShowing ? [classes.menu, classes.show].join(' ') : classes.menu;

  return (
    <header className={classes.header}>
      <button className={classes.go__back} onClick={() => props.history.goBack()}>
        <i className="icon-angle-left"></i>
        {app.language === 'en' ? 'Back' : 'Atrás'}
      </button>
      <h2>{title}</h2>
      <div className={menuClasses} onClick={e => toggleMenu(e)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}

export default Header;

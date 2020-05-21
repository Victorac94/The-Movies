import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../assets/styles-icons.css'
import getUrlSections from '../../shared/getUrlSections';
import classes from './Header.module.css';
import { appContext } from '../../context/AppContext';
import * as actions from '../../store/actions/actionTypes';

const Header = React.memo((props) => {
  const [title, setTitle] = useState(null);
  const app = useContext(appContext);
  const location = useLocation();

  // Set header title
  useEffect(() => {
    if (props.dataReducer.movieGenres && props.dataReducer.tvGenres) {

      let [mode, headerTitle, optional] = getUrlSections(location.pathname);
      let id;

      if (mode === 'search') {
        id = app.language === 'en' ? 'Search' : 'Búsqueda';

      } else if (optional === 'details') {
        id = props.dataReducer.headerTitle;

      } else if (optional === 'discover') {
        // Get genre name from the store
        id = props.dataReducer[mode + 'Genres'].find(el => el.id === headerTitle).name;

      } else {
        switch (headerTitle) {
          case 'top_rated':
            id = app.language === 'en' ? 'Top rated' : 'Mejor valoradas';
            break;
          case 'now_playing':
            id = app.language === 'en' ? 'Now playing' : 'En cines';
            break;
          case 'popular':
            id = 'Popular';
            break;
          case 'on_the_air':
            id = app.language === 'en' ? 'On air' : 'En emisión';
            break;
          default:
            id = 'The Movies';
        }
      }

      setTitle(id);
    }
  }, [location.pathname, app.language, props.dataReducer]);

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
    appReducer: state.appReducer,
    dataReducer: state.dataReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showMenu: () => dispatch({ type: actions.SHOW_MENU }),
    hideMenu: () => dispatch({ type: actions.HIDE_MENU })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

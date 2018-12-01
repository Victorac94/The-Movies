import React from 'react';

import './Menu.css';
import tmdb_logo from '../../assets/images/The movie database logo.png';

const menu = (props) => {
  return (
    <div>
      <div
      className={props.isShowing ? "menu__button close-button" : "menu__button"}
      onClick={props.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={props.isShowing ? "menu__box is-showing" : "menu__box"}>
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <p className="tmdb_attribution">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    </div>
  )
};

export default menu;

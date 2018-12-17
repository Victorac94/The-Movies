import React from 'react';

import './Header.css';
import Menu from '../../containers/Menu/Menu';

const header = (props) => {
    return (
      <div className="Header">
        {props.menuIsShowing ? (
          <div className="Backdrop"></div>
        )
        : null }
        <span
        className={props.inDetails ? "Header__goBack icon-angle-left" : "Header__goBack icon-angle-left hidden"}
        onClick={() => {
          props.goBack();
        }}></span>
        <p className="Header__title">{props.title}</p>
        <div
        className={props.menuIsShowing ? "menu__button close-button" : "menu__button"}
        onClick={props.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Menu
          toggleMenu={props.toggleMenu}
          menuIsShowing={props.menuIsShowing}
          goBack={props.goBack}
          />
      </div>
    )
}

export default header;

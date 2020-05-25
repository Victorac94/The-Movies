import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useLocation, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import tmdbLogo from '../../assets/images/The movie database logo.png';
import classes from './Menu.module.css';
import { appContext } from '../../context/AppContext';
import Search from '../Search/Search';
import * as actions from '../../store/actions/actionTypes';
import * as dataActions from '../../store/actions/fetchDataAction';
import getUrlSections from '../../shared/getUrlSections';

const Menu = props => {
  const location = useLocation();
  const history = useHistory();
  const [lastLocation, setLastLocation] = useState(location.pathname);
  const app = useContext(appContext);
  const [mode, genreId, optional] = getUrlSections(location.pathname);

  // Hide menu if we go to another path (mobile)
  useEffect(() => {
    if (lastLocation !== location.pathname && props.appReducer.isMenuShowing) {
      props.hideMenu();
      setLastLocation(location.pathname);
    }
  }, [props, location.pathname, lastLocation])


  // Load genres depending on the selected language
  useEffect(() => {
    const lang = app.language === 'en' ? 'en-US' : 'es-ES';

    props.fetchGenresList(lang);

  }, [app.language]);


  // Go to a discover route path
  const goTo = (mode, genre) => {
    history.push(`/${mode}/${genre}/discover`);
  }

  const menuClasses = props.appReducer.isMenuShowing ?
    [classes.menu, classes.show].join(' ') :
    classes.menu;

  return (
    <aside className={menuClasses}>
      <div className={classes.tmdb__logo}>
        <img src={tmdbLogo} alt="The Movie Database's logo" />
      </div>
      <div className={classes.region}>
        <button onClick={() => app.toggleLanguage()} className={app.language === 'en' ? classes.active : ''}>EN</button>
        <button onClick={() => app.toggleLanguage()} className={app.language === 'es' ? classes.active : ''}>ES</button>
      </div>
      <Link to="/movie/now_playing">
        <h1>The Movies</h1>
      </Link>
      <Search />
      <section className={classes.genres}>
        <article className={classes.movie__genres}>
          <header>{app.language === 'en' ? 'Movies' : 'Películas'}</header>
          <NavLink to="/movie/top_rated" activeClassName={classes.active__link}><span>-</span> {app.language === 'en' ? 'Top rated' : 'Mejor valoradas'}</NavLink>
          <NavLink to="/movie/now_playing" activeClassName={classes.active__link}><span>-</span> {app.language === 'en' ? 'Now playing' : 'En cines'}</NavLink>
          <NavLink to="/movie/popular" activeClassName={classes.active__link}><span>-</span> Popular</NavLink>
          <div className={classes.genre__dropdown}>
            <header>{app.language === 'en' ? 'Genres' : 'Géneros'}</header>
            <select className={mode === 'movie' && genreId > 0 && optional === 'discover' ? classes.select__active : ''} onChange={(e) => goTo('movie', e.target.value)}>
              <option>{app.language === 'en' ? 'Select' : 'Seleccionar'}</option>
              {props.dataReducer.movieGenres && props.dataReducer.movieGenres.map(gen => {
                return <option key={gen.id + gen.name} value={gen.id} selected={mode === 'movie' && gen.id === genreId ? true : false}>{gen.name}</option>
              })}
            </select>
          </div>
        </article>
        <article className={classes.tv__genres}>
          <header>{app.language === 'en' ? 'Tv shows' : 'Series'}</header>
          <NavLink to="/tv/top_rated" activeClassName={classes.active__link}><span>-</span> {app.language === 'en' ? 'Top rated' : 'Mejor valoradas'}</NavLink>
          <NavLink to="/tv/on_the_air" activeClassName={classes.active__link}><span>-</span> {app.language === 'en' ? 'On air' : 'En emisión'}</NavLink>
          <NavLink to="/tv/popular" activeClassName={classes.active__link}><span>-</span> Popular</NavLink>
          <div className={classes.genre__dropdown}>
            <header>{app.language === 'en' ? 'Genres' : 'Géneros'}</header>
            <select className={mode === 'tv' && genreId > 0 && optional === 'discover' ? classes.select__active : ''} onChange={(e) => goTo('tv', e.target.value)}>
              <option>{app.language === 'en' ? 'Select' : 'Seleccionar'}</option>
              {props.dataReducer.tvGenres && props.dataReducer.tvGenres.map(gen => {
                return <option key={gen.id + gen.name} value={gen.id} selected={mode === 'tv' && gen.id === genreId ? true : false}>{gen.name}</option>;
              })}
            </select>
          </div>
        </article>
      </section>
      <p className={classes.tmdb__message}>{app.language === 'en' ? 'This product uses the TMDb API but is not endorsed or certified by TMDb.' : 'Esta página utiliza la API de TMDb pero no está avalada ni certificada por TMDb.'}</p>
    </aside>
  )
};

const mapStateToProps = state => {
  return {
    appReducer: state.appReducer,
    dataReducer: state.dataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideMenu: () => dispatch({ type: actions.HIDE_MENU }),
    fetchGenresList: lang => dispatch(dataActions.fetchGenres(lang))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
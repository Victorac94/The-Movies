import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import tmdbLogo from '../../assets/images/The movie database logo.png';
import classes from './Menu.module.css';
import { appContext } from '../../context/AppContext';
import Search from '../Search/Search';
import * as actions from '../../store/actions/actionTypes';
import * as dataActions from '../../store/actions/fetchDataAction';

const Menu = props => {
  const location = useLocation();
  const history = useHistory();
  const [lastLocation, setLastLocation] = useState(location.pathname);
  const app = useContext(appContext);

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
          <Link to="/movie/top_rated"><span>-</span> {app.language === 'en' ? 'Top rated' : 'Mejor valoradas'}</Link>
          <Link to="/movie/now_playing"><span>-</span> {app.language === 'en' ? 'Now playing' : 'En cines'}</Link>
          <Link to="/movie/popular"><span>-</span> Popular</Link>
          <div className={classes.genre__dropdown}>
            <header>{app.language === 'en' ? 'Genres' : 'Géneros'}</header>
            <select onChange={(e) => goTo('movie', e.target.value)}>
              <option>{app.language === 'en' ? 'Select' : 'Seleccionar'}</option>
              {props.dataReducer.movieGenres && props.dataReducer.movieGenres.map(gen => {
                return <option key={gen.id + gen.name} value={gen.id}>{gen.name}</option>
              })}
            </select>
          </div>
        </article>
        <article className={classes.tv__genres}>
          <header>{app.language === 'en' ? 'Tv shows' : 'Series'}</header>
          <Link to="/tv/top_rated"><span>-</span> {app.language === 'en' ? 'Top rated' : 'Mejor valoradas'}</Link>
          <Link to="/tv/on_the_air"><span>-</span> {app.language === 'en' ? 'On air' : 'En emisión'}</Link>
          <Link to="/tv/popular"><span>-</span> Popular</Link>
          <div className={classes.genre__dropdown}>
            <header>{app.language === 'en' ? 'Genres' : 'Géneros'}</header>
            <select onChange={(e) => goTo('tv', e.target.value)}>
              <option>{app.language === 'en' ? 'Select' : 'Seleccionar'}</option>
              {props.dataReducer.tvGenres && props.dataReducer.tvGenres.map(gen => {
                return <option key={gen.id + gen.name} value={gen.id}>{gen.name}</option>;
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
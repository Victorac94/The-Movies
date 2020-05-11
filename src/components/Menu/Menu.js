import React, { useEffect, useState, useContext } from 'react';

import tmdbLogo from '../../assets/images/The movie database logo.png';
import classes from './Menu.module.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { appContext } from '../../context/AppContext';

const Menu = props => {
  const [movieGenres, setMovieGenres] = useState(null);
  const [tvGenres, setTvGenres] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const app = useContext(appContext);

  useEffect(() => {
    if (app.isMenuShowing) {
      app.hideMenu();
    }
  }, [location.pathname])

  useEffect(() => {
    const movieGen = [];
    const tvGen = [];

    // Movie genres
    for (const key of props.movieGenres) {
      const genre = <option key={key.id + key.name} value={key.id}>{key.name}</option>;
      movieGen.push(genre);
    }

    // Tv show genres
    for (const key of props.tvGenres) {
      const genre = <option key={key.id + key.name} value={key.id}>{key.name}</option>;
      tvGen.push(genre);
    }

    setMovieGenres(movieGen);
    setTvGenres(tvGen);
  }, [props.movieGenres, props.tvGenres]);

  const goTo = (mode, genre) => {
    history.push(`/${mode}/${genre}/discover`);
  }

  const menuClasses = app.isMenuShowing ?
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
      <div className={classes.search__wrapper}>
        <input type="text" />
        <button type="submit">search</button>
      </div>
      <section className={classes.genres}>
        <article className={classes.movie__genres}>
          <header>Movies</header>
          <Link to="/movie/top_rated"><span>-</span> Top rated</Link>
          <Link to="/movie/now_playing"><span>-</span> Now playing</Link>
          <Link to="/movie/popular"><span>-</span> Popular</Link>
          <div className={classes.genre__dropdown}>
            <header>Genres</header>
            <select onChange={(e) => goTo('movie', e.target.value)}>
              <option>Select</option>
              {movieGenres}
            </select>
          </div>
        </article>
        <article className={classes.tv__genres}>
          <header>Tv Shows</header>
          <Link to="/tv/top_rated"><span>-</span> Top rated</Link>
          <Link to="/tv/on_the_air"><span>-</span> On air</Link>
          <Link to="/tv/popular"><span>-</span> Popular</Link>
          <div className={classes.genre__dropdown}>
            <header>Genres</header>
            <select onChange={(e) => goTo('tv', e.target.value)}>
              <option>Select</option>
              {tvGenres}
            </select>
          </div>
        </article>
      </section>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </aside>
  )
}

export default Menu;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './DesktopMenu.css';
import tmdb_logo from '../../assets/images/The movie database logo.png';
import * as fetchData from '../../store/actions/fetchDataAction';
import * as generalActions from '../../store/actions/generalActions';

class Menu extends Component {
  searchTerm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".DesktopMenu_input");
    // this.props.onResetPage();
    this.props.onFetchSearch(input.value);
    this.props.history.replace(`/search?query=${input.value}`);
    input.blur();
  }

  onDiscover = (e) => {
    const dataset = e.target.options[e.target.selectedIndex].dataset;

    this.props.onResetPage();
    this.props.onFetchDiscover(dataset.mode, dataset.genre, 1);
    this.props.onSetPath(dataset.mode, dataset.genre);
    this.props.history.push(`/${dataset.mode}/${dataset.genre}`);
  }

  shouldComponentUpdate () {
    return false;
  }

  render() {
    return (
      <div className="DesktopMenu">
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <Link to="/" style={{textDecoration: "none"}} onClick={() => this.props.onSetPath(null, null)}>
          <span className="menu__app_title">The Movies</span>
        </Link>
        <div className="menu__box__search_box">
          <form onSubmit={this.searchTerm}>
            <input className="menu__box__search_input DesktopMenu_input" type="text" placeholder="Search..." />
            <button className="menu__box__search_button">Search</button>
          </form>
        </div>
        <div className="menu__lists">
          <ul className="menu__list">
            <span className="menu__list_title">Movies</span>
            <li>
              <Link to="/movie/top_rated"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("movie", "top_rated", 1);
                  this.props.onSetPath("movie", "top_rated");
                }}>Top Rated</Link>
            </li>
            <li>
              <Link to="/movie/now_playing"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("movie", "now_playing", 1);
                  this.props.onSetPath("movie", "now_playing");
                }}>Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/popular"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("movie", "popular", 1);
                  this.props.onSetPath("movie", "popular");
                }}>Popular</Link>
            </li>
            <label className="genres">Genres</label>
            <select className="genres_dropdown" onChange={(e) => this.onDiscover(e)}>
              <option>Select</option>
              <option data-mode="movie" data-genre="28">Action</option>
              <option data-mode="movie" data-genre="12">Adventure</option>
              <option data-mode="movie" data-genre="16">Animation</option>
              <option data-mode="movie" data-genre="35">Comedy</option>
              <option data-mode="movie" data-genre="80">Crime</option>
              <option data-mode="movie" data-genre="99">Documentary</option>
              <option data-mode="movie" data-genre="18">Drama</option>
              <option data-mode="movie" data-genre="10751">Family</option>
              <option data-mode="movie" data-genre="14">Fantasy</option>
              <option data-mode="movie" data-genre="36">History</option>
              <option data-mode="movie" data-genre="27">Horror</option>
              <option data-mode="movie" data-genre="10402">Music</option>
              <option data-mode="movie" data-genre="9648">Mystery</option>
              <option data-mode="movie" data-genre="10749">Romance</option>
              <option data-mode="movie" data-genre="878">Science Fiction</option>
              <option data-mode="movie" data-genre="10770">TV Movie</option>
              <option data-mode="movie" data-genre="53">Thriller</option>
              <option data-mode="movie" data-genre="10752">War</option>
              <option data-mode="movie" data-genre="37">Western</option>
            </select>
          </ul>
          <ul className="menu__list">
            <span className="menu__list_title">TV Shows</span>
            <li>
              <Link to="/tv/top_rated"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("tv", "top_rated", 1);
                  this.props.onSetPath("tv", "top_rated");
                }}>Top Rated</Link>
            </li>
            <li>
              <Link to="/tv/on_the_air"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("tv", "on_the_air", 1);
                  this.props.onSetPath("tv", "on_the_air");
                }}>On Air</Link>
            </li>
            <li>
              <Link to="/tv/popular"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("tv", "popular", 1);
                  this.props.onSetPath("tv", "popular");
                }}>Popular</Link>
            </li>
            <label className="genres">Genres</label>
            <select className="genres_dropdown" onChange={(e) => this.onDiscover(e)}>
              <option>Select</option>
              <option data-mode="tv" data-genre="10759">Action & Adventure</option>
              <option data-mode="tv" data-genre="16">Animation</option>
              <option data-mode="tv" data-genre="35">Comedy</option>
              <option data-mode="tv" data-genre="80">Crime</option>
              <option data-mode="tv" data-genre="99">Documentary</option>
              <option data-mode="tv" data-genre="18">Drama</option>
              <option data-mode="tv" data-genre="10751">Family</option>
              <option data-mode="tv" data-genre="10762">Kids</option>
              <option data-mode="tv" data-genre="9648">Mistery</option>
              <option data-mode="tv" data-genre="10763">News</option>
              <option data-mode="tv" data-genre="10764">Reality</option>
              <option data-mode="tv" data-genre="10765">Sci-Fi & Fantasy</option>
              <option data-mode="tv" data-genre="10766">Soap</option>
              <option data-mode="tv" data-genre="10767">Talk</option>
              <option data-mode="tv" data-genre="10768">War & Politics</option>
              <option data-mode="tv" data-genre="37">Western</option>
            </select>
          </ul>
          <p className="tmdb_attribution">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
          </p>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: (mode, genre, page) => dispatch(fetchData.fetchData(mode, genre, page)),
    onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query)),
    onFetchDiscover: (mode, genre, page) => dispatch(fetchData.fetchDiscover(mode, genre, page)),
    onResetPage: () => dispatch(generalActions.resetPage()),
    onSetPath: (...params) => dispatch(generalActions.setPath(params))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Menu));

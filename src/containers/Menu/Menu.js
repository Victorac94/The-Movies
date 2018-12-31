import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './Menu.css';
import tmdb_logo from '../../assets/images/The movie database logo.png';
import * as fetchData from '../../store/actions/fetchDataAction';
import * as actions from '../../store/actions/generalActions';

class Menu extends Component {
  searchTerm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".menu__box_input");
    this.props.history.replace(`/search?query=${input.value}`);
    this.props.onFetchSearch(input.value);
    this.showNormalView();
    input.blur();
  }

  showNormalView = () => {
    this.props.toggleMenu();
    this.props.onHideDetails();
    this.props.goBack();
  }

  onDiscover = (e) => {
    const dataset = e.target.options[e.target.selectedIndex].dataset;

    this.props.onResetPage();
    this.props.onFetchDiscover(dataset.mode, dataset.genre, 1);
    this.props.onSetPath(dataset.mode, dataset.genre);
    this.props.history.push(`/${dataset.mode}/${dataset.genre}`);
    this.showNormalView();
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.menuIsShowing !== nextProps.menuIsShowing) {
      return true;
    }
    return false;
  }

  componentDidUpdate () {
    console.log("Menu didUpdate");
  }

  render() {
    return (
      <div className={this.props.menuIsShowing ? "menu__box is-showing" : "menu__box"}>
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <span className="menu__app_title">The Movies</span>
        <div className="menu__box__search_box">
          <form onSubmit={this.searchTerm}>
            <input className="menu__box__search_input menu__box_input" type="text" placeholder="Search..." />
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
                  this.showNormalView();
                }}>Top Rated</Link>
            </li>
            <li>
              <Link to="/movie/now_playing"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("movie", "now_playing", 1);
                  this.props.onSetPath("movie", "now_playing");
                  this.showNormalView();
                }}>Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/popular"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("movie", "popular", 1);
                  this.props.onSetPath("movie", "popular");
                  this.showNormalView();
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
              <option data-mode="movie" data-genre="18">Drama</option>
              <option data-mode="movie" data-genre="10751">Family</option>
              <option data-mode="movie" data-genre="14">Fantasy</option>
              <option data-mode="movie" data-genre="36">History</option>
              <option data-mode="movie" data-genre="27">Horror</option>
              <option data-mode="movie" data-genre="10762">Kids</option>
              <option data-mode="movie" data-genre="9648">Mistery</option>
              <option data-mode="movie" data-genre="10402">Music</option>
              <option data-mode="movie" data-genre="10749">Romance</option>
              <option data-mode="movie" data-genre="878">Science Fiction</option>
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
                  this.showNormalView();
                }}>Top Rated</Link>
            </li>
            <li>
              <Link to="/tv/on_the_air"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("tv", "on_the_air", 1);
                  this.props.onSetPath("tv", "on_the_air");
                  this.showNormalView();
                }}>On Air</Link>
            </li>
            <li>
              <Link to="/tv/popular"
                onClick={() => {
                  this.props.onResetPage();
                  this.props.onFetchData("tv", "popular", 1);
                  this.props.onSetPath("tv", "popular");
                  this.showNormalView();
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
    onResetPage: () => dispatch(actions.resetPage()),
    onSetPath: (...params) => dispatch(actions.setPath(params)),
    onHideDetails: () => dispatch(actions.goBack())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Menu));

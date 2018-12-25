import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './DesktopMenu.css';
import tmdb_logo from '../../assets/images/The movie database logo.png';
import * as fetchData from '../../store/actions/fetchDataAction';

class Menu extends Component {
  searchTerm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".DesktopMenu_input");
    this.props.history.replace(`/search?query=${input.value}`);
    this.props.onFetchSearch(input.value);
    input.blur();
  }

  render() {
    return (
      <div className="DesktopMenu">
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="menu__app_title">The Movies</span>
        </Link>
        <div className="menu__lists">
          <div className="menu__box__search_box">
            <form onSubmit={this.searchTerm}>
              <input className="menu__box__search_input DesktopMenu_input" type="text" placeholder="Search..." />
              <button className="menu__box__search_button">Search</button>
            </form>
          </div>
          <ul className="menu__list">
            <span className="menu__list_title">Movies</span>
            <li>
              <Link to="/movie/top_rated"
                onClick={() => this.props.onFetchData("movie", "top_rated")}>Top Rated</Link>
            </li>
            <li>
              <Link to="/movie/now_playing"
                onClick={() => this.props.onFetchData("movie", "now_playing")}>Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/popular"
                onClick={() => this.props.onFetchData("movie", "popular")}>Popular</Link>
            </li>
          </ul>
          <ul className="menu__list">
            <span className="menu__list_title">TV Shows</span>
            <li>
              <Link to="/tv/top_rated"
                onClick={() => this.props.onFetchData("tv", "top_rated")}>Top Rated</Link>
            </li>
            <li>
              <Link to="/tv/on_the_air"
                onClick={() => this.props.onFetchData("tv", "on_the_air")}>On Air</Link>
            </li>
            <li>
              <Link to="/tv/popular"
                onClick={() => this.props.onFetchData("tv", "popular")}>Popular</Link>
            </li>
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
    onFetchData: (mode, genre) => dispatch(fetchData.fetchData(mode, genre)),
    onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Menu));

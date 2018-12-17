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
    const input = document.querySelector(".menu__box__search_input");
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

  render() {
    return (
      <div className={this.props.menuIsShowing ? "menu__box is-showing" : "menu__box"}>
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <div className="menu__box__search_box">
          <form onSubmit={this.searchTerm}>
            <input className="menu__box__search_input" type="text" placeholder="Search..." />
            <button className="menu__box__search_button">Search</button>
          </form>
        </div>
        <ul className="menu__movies_list">
          <span className="menu__list_title">Movies</span>
          <li>
            <Link to="/movie/top_rated"
              onClick={() => {
                this.props.onFetchData("movie", "top_rated");
                this.showNormalView();
              }}>Top Rated</Link>
          </li>
          <li>
            <Link to="/movie/now_playing"
              onClick={() => {
                this.props.onFetchData("movie", "now_playing");
                this.showNormalView();
              }}>Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/popular"
              onClick={() => {
                this.props.onFetchData("movie", "popular");
                this.showNormalView();
              }}>Popular</Link>
          </li>
        </ul>
        <p className="tmdb_attribution">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: (mode, genre) => dispatch(fetchData.fetchData(mode, genre)),
    onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query)),
    onHideDetails: () => dispatch(actions.goBack())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Menu));

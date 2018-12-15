import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './Menu.css';
import tmdb_logo from '../../assets/images/The movie database logo.png';
import * as fetchData from '../../store/actions/fetchDataAction';
import * as actions from '../../store/actions/generalActions';

class Menu extends Component {
  render() {
    return (
      <div className={this.props.menuIsShowing ? "menu__box is-showing" : "menu__box"}>
        <img src={tmdb_logo} className="tmdb_logo" alt="TheMovieDatabase logo" />
        <ul className="menu__movies_list">
          <span className="menu__list_title">Movies</span>
          <li>
            <Link to="/movie/top_rated"
              onClick={() => {
                this.props.onFetchData("movie", "top_rated");
                this.props.toggleMenu();
                this.props.onHideDetails();
              }}>Top Rated</Link>
          </li>
          <li>
            <Link to="/movie/now_playing"
              onClick={() => {
                this.props.onFetchData("movie", "now_playing");
                this.props.toggleMenu();
                this.props.onHideDetails();
              }}>Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/popular"
              onClick={() => {
                this.props.onFetchData("movie", "popular");
                this.props.toggleMenu();
                this.props.onHideDetails();
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
    onHideDetails: () => dispatch(actions.goBack())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Menu));

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import './Home.css';
import * as fetchData from '../../store/actions/fetchDataAction';
import Grid from '../Grid/Grid';

class Home extends Component {
  searchTerm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".Home__search_input");
    this.props.history.replace(`/search?query=${input.value}`);
    this.props.onFetchSearch(input.value);
    input.blur();
  }

  render () {
    return (
      <div className="Home__wrapper">
        <Grid {...this.props}
          showDetails={this.props.showDetails}
          menuIsShowing={this.props.menuIsShowing}
          toggleMenu={this.props.toggleMenu}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query)),
  }
}

export default connect(null, mapDispatchToProps)(Home);


// <ul className="menu__movies__list">
// <span className="menu__list__title">Movies</span>
// <li>
// <Link to="/movie/top_rated">Top Rated</Link>
// </li>
// <li>
// <Link to="/movie/now_playing">Now Playing</Link>
// </li>
// <li>
// <Link to="/movie/popular">Popular</Link>
// </li>
// </ul>
// <ul className="menu__tv__list">
// <span className="menu__list__title">TV Shows</span>
// <li>
// <Link to="/tv/top_rated">Top Rated</Link>
// </li>
// <li>
// <Link to="/tv/on_the_air">On Air</Link>
// </li>
// <li>
// <Link to="/tv/popular">Popular</Link>
// </li>
// </ul>

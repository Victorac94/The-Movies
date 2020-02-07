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

  render() {
    return (
      <div className="Home__wrapper">
        <Grid {...this.props}
          showDetails={this.props.showDetails}
          menuIsShowing={this.props.menuIsShowing}
          toggleMenu={this.props.toggleMenu} />
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

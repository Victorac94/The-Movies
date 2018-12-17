import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Grid.css';
import * as fetchData from '../../store/actions/fetchDataAction';
import Card from '../../components/Card/Card';

class Grid extends Component {
  searchTerm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".grid__search_box input");
    this.props.history.replace(`/search?query=${input.value}`);
    this.props.onFetchSearch(input.value);

    if (this.props.menuIsShowing) {
      this.props.toggleMenu();
    }
    input.blur();
  }

  componentDidMount() {
    const mode = this.props.match.params.mode;
    const genre = this.props.match.params.genre;

    this.props.onFetchData(mode, genre);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldupdate grid");

    if (this.props.dataState.newData === false && nextProps.dataState.newData === true) {
      return true;
    } else if (this.props.dataState.fetchingData === true && nextProps.dataState.fetchingData === false) {
      if (this.props.location.pathname === "/search") {
        return true;
      }
    }
    return false;
  }

  render () {
    console.log("rendering grid");

    const grid = document.querySelector(".Grid");
    let cards = null;

    // If redux state doesn't have any data while being on '/search' then show a search box
    if (this.props.dataState.data === null && this.props.location.pathname === "/search") {
      if (grid) {
        grid.style.display = "block";
      }
      cards = (
        <div className="grid__search_box">
          <form onSubmit={this.searchTerm}>
            <input className="menu__box__search_input" type="text" placeholder="Search..." />
            <button className="menu__box__search_button">Search</button>
          </form>
        </div>
      );
    }
    // If redux state has data then show the data through the cards
    else if (this.props.dataState.data) {
      const nowPlaying = this.props.dataState.data;

      if (grid) {
        grid.style.display = "grid";
      }

      cards = nowPlaying.map((el, i) => {
        const mode = el.media_type === "tv" ? "tv" : this.props.match.params.mode;
        return (
          <Card
            key={i}
            info={el}
            showDetails={(e) => this.props.showDetails(e, mode)}
            />
        )
      })
    }
    return (
      <div className="Grid">
        {cards}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataState: state.dataReducer,
    generalState: state.generalReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: (mode, genre) => dispatch(fetchData.fetchData(mode, genre)),
    onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query)),
    // onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    // onShowDetails: () => dispatch(generalActions.showDetails())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grid));

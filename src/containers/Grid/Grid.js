import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Grid.css';
import * as fetchData from '../../store/actions/fetchDataAction';
import * as generalActions from '../../store/actions/generalActions';
import { calculateCardPosition } from '../../shared/calculateCardPosition';
import { resetCardPosition } from '../../shared/resetCardPosition';
import Card from '../../components/Card/Card';
import DetailsCard from '../DetailsCard/DetailsCard';

class Grid extends Component {
  componentDidMount() {
    const mode = this.props.match.params.mode;
    const genre = this.props.match.params.genre;

    this.props.onFetchData(mode, genre);
    console.log("didmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldupdate");
    // If user clicks the 'go back' button, dont re-render
    if (this.props.generalState.inDetails === true && nextProps.generalState.inDetails === false) {
      this.hideDetails();
      return false;
    }
    return true;
  }

  showDetails = (e) => {
    if (e.currentTarget.classList.contains("currentCard")) return;

    const currCard = e.currentTarget;
    const poster = currCard.querySelector(".Card__Poster");
    const cardInfo = currCard.querySelector(".Card__Info");
    const dataState = this.props.dataState;
    const mode = this.props.match.params.mode;

    // Only fetch movie details if user is clicking
    // in a new movie or if it's the first time since page loaded
    if (dataState.details === null || Number(currCard.dataset.id) !== dataState.details.id) {
      this.props.onFetchDetails(mode, currCard.dataset.id);
    }

    this.props.onShowDetails();

    currCard.classList.add("currentCard");

    calculateCardPosition(poster, cardInfo);

    document.querySelector(".Grid").style.overflow = "hidden";
  }

  hideDetails = () => {
    const currCard = document.querySelector(".currentCard");
    const poster = currCard.querySelector("img");
    const cardInfo = currCard.querySelector(".Card__Info");

    resetCardPosition(poster, cardInfo);

    document.querySelector(".Grid").style.overflow = "";
    currCard.classList.remove("currentCard");
  }

  render () {
    let cards = null
console.log("rendering grid");
    if (this.props.dataState.data) {
      const nowPlaying = this.props.dataState.data;
      cards = nowPlaying.map((el, i) => {
        return (
          <Card key={i} info={el} showDetails={(e) => this.showDetails(e)}/>
        )
      })
    }
    return (
      <div>
        <DetailsCard />
        <div className="Grid">
          {cards}
        </div>
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
    onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    onShowDetails: () => dispatch(generalActions.showDetails())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grid));

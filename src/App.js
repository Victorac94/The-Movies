import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Grid from './containers/Grid/Grid';
import DetailsCard from './containers/DetailsCard/DetailsCard';
import { calculateCardPosition } from './shared/calculateCardPosition';
import { resetCardPosition } from './shared/resetCardPosition';
import * as generalActions from './store/actions/generalActions';
import * as fetchData from './store/actions/fetchDataAction';

class App extends Component {
  showDetails = (e, mode) => {
    if (e.currentTarget.classList.contains("currentCard")) return;

    const currCard = e.currentTarget;
    const poster = currCard.querySelector(".Card__Poster");
    const cardInfo = currCard.querySelector(".Card__Info");
    const dataState = this.props.dataState;

    // Only fetch movie details if user is clicking
    // in a new movie or if it's the first time since page loaded
    if (dataState.details === null || Number(currCard.dataset.id) !== dataState.details.id) {
      this.props.onFetchDetails(mode, currCard.dataset.id);
    }

    currCard.classList.add("currentCard");

    this.props.onShowDetails();
    calculateCardPosition(poster, cardInfo);
  }

  hideDetails = () => {
    const currCard = document.querySelector(".currentCard");
    const poster = currCard.querySelector("img");
    const cardInfo = currCard.querySelector(".Card__Info");

    resetCardPosition(poster, cardInfo);
    currCard.classList.remove("currentCard");
  }

  render() {
    return (
      <div className="App">
        <Header goBack={this.hideDetails}/>
        <DetailsCard />
        <Switch>
          <Route path="/:mode/:genre" render={() => (
            <Grid {...this.props} showDetails={(e, mode) => this.showDetails(e, mode)}/>
          )} />
          <Redirect to="/movie/now_playing" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataState: state.dataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    onShowDetails: () => dispatch(generalActions.showDetails())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

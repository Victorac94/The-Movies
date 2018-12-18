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
  state = {
    menuIsShowing: false
  }

  toggleMenu = () => {

    // If we want to show the menu
    if (!this.state.menuIsShowing) {
      this.props.history.push("#menu");
    }
    // If we want to hide the menu
    else {
      let inDetails = this.props.generalState.inDetails;

      if (inDetails) {
        // This has to be 'replace', because if we use 'push' there'll be
        // two '#details' in a row in the history array, thus making the
        // user to press the back button twice to hide Details if the user
        // opened the 'menu' while in 'details' view.
        this.props.history.replace("#details");
      } else {
        this.props.history.push("#");
      }
    }

    this.setState(prevState => {
      return {menuIsShowing: !prevState.menuIsShowing}
    })
  };

  showDetails = (e, mode) => {
    if (e.currentTarget.classList.contains("currentCard")) return;

    const currCard = e.currentTarget;
    const poster = currCard.querySelector(".Card__Poster");
    const dataState = this.props.dataState;

    // Only fetch movie details if user is clicking
    // in a new movie or if it's the first time since page loaded
    if (dataState.details === null || Number(currCard.dataset.id) !== dataState.details.id) {
      this.props.onFetchDetails(mode, currCard.dataset.id);
    }

    currCard.classList.add("currentCard");
    this.props.history.push("#details");

    this.props.onShowDetails(mode);
    calculateCardPosition(poster);
  }

  hideDetails = () => {
    const currCard = document.querySelector(".currentCard");
    if (currCard) {
      const poster = currCard.querySelector("img");
      const cardInfo = currCard.querySelector(".Card__Info");

      resetCardPosition(poster, cardInfo);
      currCard.classList.remove("currentCard");
      this.props.history.push("#");
      this.props.onHideDetails();
    }
  }

  onHashChange = (e) => {
    if (e.oldURL) {
      console.log(e.oldURL);
      //We can only have one # in the URL (either 'details' or 'menu')
      var oldURL = e.oldURL.split('#')[1];

      if (oldURL === 'details') {
        this.hideDetails();
      } else if (oldURL === 'menu') {
        this.toggleMenu();
      }
    }
  }

  componentDidMount () {
    window.addEventListener("hashchange", (e) => this.onHashChange(e), false);
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Header
          title={this.props.generalState.title}
          menuIsShowing={this.state.menuIsShowing}
          toggleMenu={this.toggleMenu}
          goBack={this.hideDetails}
          inDetails={this.props.generalState.inDetails}/>
        <DetailsCard />
        <Switch>
          <Route path="/:mode/:genre?" render={() => (
            <Grid {...this.props}
              showDetails={(e, mode) => this.showDetails(e, mode)}
              menuIsShowing={this.state.menuIsShowing}
              toggleMenu={this.toggleMenu}/>
          )} />
          <Redirect to="/movie/now_playing" />
        </Switch>
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
    onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    onShowDetails: (media) => dispatch(generalActions.showDetails(media)),
    onHideDetails: () => dispatch(generalActions.goBack())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

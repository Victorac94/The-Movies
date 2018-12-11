import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
// import NowPlaying from './containers/movies/NowPlaying';
import Grid from './containers/Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:mode/:genre" render={() => (<Grid {...this.props} />)} />
          <Redirect to="/movie/now_playing" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);

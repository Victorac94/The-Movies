import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Grid from './containers/Grid/Grid';
import Details from './containers/Details/Details';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import Main from './containers/Main/Main';
import Menu from './components/Menu/Menu';
import AppContextProvider from './context/AppContext';

const App = props => {

  return (
    <ErrorBoundary>
      <AppContextProvider>
        <div className="App">
          <Menu />
          <Main>
            <Header />
            <Switch>
              <Route path="/search" component={Grid} />
              <Route path="/:mode/:id/details" component={Details} />
              <Route path="/:mode/:genre/:discover?" component={Grid} />
              <Redirect to="/movie/now_playing" />
            </Switch>
          </Main>
        </div>
      </AppContextProvider>
    </ErrorBoundary>
  )
}
export default withRouter(App);

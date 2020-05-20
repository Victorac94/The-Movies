import React from 'react';
// import { connect } from 'react-redux';
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

  // const mapStateToProps = state => {
  //   return {
  //     dataState: state.dataReducer,
  //     generalState: state.generalReducer
  //   }
  // }

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
  //     onShowDetails: (media) => dispatch(generalActions.showDetails(media)),
  //     onHideDetails: () => dispatch(generalActions.goBack()),
  //     onSetPath: (params) => dispatch(generalActions.setPath(params))
  //   }
  // }
}
export default withRouter(App);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

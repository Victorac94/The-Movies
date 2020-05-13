import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Axios from 'axios';

import './App.css';
import Header from './components/Header/Header';
import Grid from './containers/Grid/Grid';
import Details from './containers/Details/Details';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import Main from './containers/Main/Main';
import Menu from './components/Menu/Menu';
import AppContextProvider from './context/AppContext';
// import UseHttpRequest from './hooks/UseHttpRequest';

const App = props => {
  const [movieGenres, setMovieGenres] = useState(null);
  const [tvGenres, setTvGenres] = useState(null);
  // const { data, fetchData, error, isLoading } = UseHttpRequest();

  // Load genres from localStorage or API call
  useEffect(() => {
    let movieGen = localStorage.getItem('movie-genres');
    let tvGen = localStorage.getItem('tv-genres');

    if (!movieGen) {
      Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6095dab7d845691ab95df77d0a908452&language=en-US')
        .then(response => {
          movieGen = response.data.genres;

          setMovieGenres(movieGen);
          localStorage.setItem('movie-genres', JSON.stringify(movieGen));
        }).catch(err => {
          throw new Error(err);
        });

    } else {
      movieGen = JSON.parse(movieGen)
      setMovieGenres(movieGen);
    }

    if (!tvGen) {
      Axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=6095dab7d845691ab95df77d0a908452&language=en-US')
        .then(response => {
          tvGen = response.data.genres;

          setTvGenres(tvGen);
          localStorage.setItem('tv-genres', JSON.stringify(tvGen));
        }).catch(err => {
          throw new Error(err);
        });

    } else {
      tvGen = JSON.parse(tvGen)
      setTvGenres(tvGen);
    }
  }, []);

  return (
    <ErrorBoundary>
      <AppContextProvider>
        <div className="App">
          {movieGenres && tvGenres
            && <Menu movieGenres={movieGenres} tvGenres={tvGenres} />}
          <Main>
            <Header path={props.location.pathname} history={props.history} />
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

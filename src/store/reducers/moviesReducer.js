import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  nowPlaying: null,
  movieDetails: null,
  error: false
};

const fetchNowPlayingSucceed = (state, action) => {
  const obj = {nowPlaying: action.data, error: false};
  return updateObject(state, obj);
}

const fetchNowPlayingFailed = (state) => {
  return updateObject(state, {error: true})
}

const fetchMovieDetailsSucceed = (state, action) => {
  const obj = {movieDetails: action.data, error: false};
  return updateObject(state, obj)
}

const fetchMovieDetailsFailed = (state) => {
  return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_NOW_PLAYING_SUCCEED: return fetchNowPlayingSucceed(state, action);
    case actionTypes.FETCH_NOW_PLAYING_FAILED: return fetchNowPlayingFailed(state);
    case actionTypes.FETCH_MOVIE_DETAILS_SUCCEED: return fetchMovieDetailsSucceed(state, action);
    case actionTypes.FETCH_MOVIE_DETAILS_FAILED: return fetchMovieDetailsFailed(state);
    default: return state
  }
}

export default reducer;

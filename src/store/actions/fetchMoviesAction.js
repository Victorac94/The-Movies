import * as actionTypes from './actionTypes';

// NOW PLAYING
export const fetchNowPlaying = () => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING,
    error: false
  }
}

export const fetchNowPlayingSucceed = (data) => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_SUCCEED,
    data: data
  }
}

export const fetchNowPlayingFailed = () => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_FAILED,
    error: true
  }
}

// MOVIE DETAILS
export const fetchMovieDetails = (id) => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS,
    id: id,
    error: false
  }
}

export const fetchMovieDetailsSucceed = (data) => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_SUCCEED,
    data: data
  }
}

export const fetchMovieDetailsFailed = () => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_FAILED,
    error: true
  }
}

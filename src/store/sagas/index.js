//takeEvery nos permite escuchar ciertas acciones y hacer algo cuando esto ocurra
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchNowPlaying, fetchMovieDetails } from './fetchMoviesSaga';

export function* watchMovies() {
  yield takeEvery(actionTypes.FETCH_NOW_PLAYING, fetchNowPlaying);
  yield takeEvery(actionTypes.FETCH_MOVIE_DETAILS, fetchMovieDetails)
}

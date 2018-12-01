import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchMovies from '../actions/fetchMoviesAction';

export function* fetchNowPlaying() {
  try {
    const response = yield axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=6095dab7d845691ab95df77d0a908452");
    console.log(response.data.results);
    yield put(fetchMovies.fetchNowPlayingSucceed(response.data.results));
  }
  catch {
    console.log("Error fetching Now Playing");
    yield put(fetchMovies.fetchNowPlayingFailed());
  }
}

export function* fetchMovieDetails(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/movie/${payload.id}?api_key=6095dab7d845691ab95df77d0a908452&append_to_response=videos`);
    console.log(response.data);
    yield put(fetchMovies.fetchMovieDetailsSucceed(response.data))
  }
  catch {
    console.log("Error fetching movie details");
    yield put(fetchMovies.fetchMovieDetailsFailed());
  }
}

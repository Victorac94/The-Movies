import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchMovies from '../actions/fetchDataAction';

export function* fetchData(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.genre}?api_key=6095dab7d845691ab95df77d0a908452`);
    console.log(response.data.results);
    yield put(fetchMovies.fetchDataSucceed(response.data.results));
  }
  catch {
    console.log("Error fetching Data");
    yield put(fetchMovies.fetchDataFailed());
  }
}

export function* fetchDetails(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.id}?api_key=6095dab7d845691ab95df77d0a908452&append_to_response=videos,credits`);
    console.log(response.data);
    yield put(fetchMovies.fetchDetailsSucceed(response.data))
  }
  catch {
    console.log("Error fetching Details");
    yield put(fetchMovies.fetchDetailsFailed());
  }
}

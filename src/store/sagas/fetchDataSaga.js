import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchDataActions from '../actions/fetchDataAction';
import * as generalActions from '../actions/generalActions';

export function* fetchData(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.genre}?api_key=6095dab7d845691ab95df77d0a908452`);
    console.log(response.data.results);
    yield put(fetchDataActions.fetchDataSucceed(response.data.results));
    yield put(generalActions.loadTitle(payload.genre))
  }
  catch {
    console.log("Error fetching Data");
    yield put(fetchDataActions.fetchDataFailed());
  }
}

export function* fetchDetails(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.id}?api_key=6095dab7d845691ab95df77d0a908452&append_to_response=videos,credits`);
    console.log(response.data);
    yield put(fetchDataActions.fetchDetailsSucceed(response.data))
  }
  catch {
    console.log("Error fetching Details");
    yield put(fetchDataActions.fetchDetailsFailed());
  }
}

export function* fetchSearch(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&query=${payload.data}&include_adult=false`);
    console.log(response.data);
    yield put(fetchDataActions.fetchSearchSucceed(response.data.results));
    yield put(generalActions.loadTitle("search"))
  }
  catch {
    console.log("Error fetching Search Term");
    yield put(fetchDataActions.fetchSearchFailed());
  }
}

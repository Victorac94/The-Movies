import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchDataActions from '../actions/fetchDataAction';
import * as generalActions from '../actions/generalActions';

// TRENDING

export function* fetchTrending(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6095dab7d845691ab95df77d0a908452&page=${payload.page}`);
    yield put(fetchDataActions.fetchTrendingSucceed(response.data.results));
    yield put(generalActions.nextPage(payload.page));
    yield put(generalActions.loadTitle("Home"));
  } catch {
    yield put(fetchDataActions.fetchTrendingFailed());
  }
}

// DATA

export function* fetchData(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.genre}?api_key=6095dab7d845691ab95df77d0a908452&language=es-ES&page=${payload.page}&region=ES`);
    yield put(fetchDataActions.fetchDataSucceed(response.data.results));
    yield put(generalActions.nextPage(payload.page));
    yield put(generalActions.loadTitle(payload.genre));
  }
  catch {
    yield put(fetchDataActions.fetchDataFailed());
  }
}

// DETAILS

export function* fetchDetails(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/${payload.mode}/${payload.id}?api_key=6095dab7d845691ab95df77d0a908452&append_to_response=videos,credits,recommendations,similar`);
    yield put(fetchDataActions.fetchDetailsSucceed(response.data))
  }
  catch {
    yield put(fetchDataActions.fetchDetailsFailed());
  }
}

// SEARCH

export function* fetchSearch(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&query=${payload.data}&include_adult=false`);
    yield put(fetchDataActions.fetchSearchSucceed(response.data.results));
    yield put(generalActions.loadTitle("search"))
  }
  catch {
    yield put(fetchDataActions.fetchSearchFailed());
  }
}

// DISCOVER

export function* fetchDiscover(payload) {
  try {
    const response = yield axios.get(`https://api.themoviedb.org/3/discover/${payload.mode}?api_key=6095dab7d845691ab95df77d0a908452&with_genres=${payload.genre}&sort_by=vote_average.desc&vote_count.gte=10&page=${payload.page}&include_adult=false`)
    yield put(fetchDataActions.fetchDiscoverSucceed(response.data.results));
    yield put(generalActions.nextPage(payload.page));
    yield put(generalActions.loadTitle(payload.genre));
  }
  catch {
    yield put(fetchDataActions.fetchDiscoverFailed());
  }
}

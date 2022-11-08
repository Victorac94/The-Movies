import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as fetchDataActions from '../actions/fetchDataAction';
// import * as generalActions from '../actions/generalActions';

// GENRES
export function* fetchGenres(payload) {
  try {
    // Fetch movie genres
    const movieResponse = yield axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=6095dab7d845691ab95df77d0a908452&language=${payload.lang}`);
    // Fetch tv genres
    const tvResponse = yield axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=6095dab7d845691ab95df77d0a908452&language=${payload.lang}`);

    if (movieResponse.status === 200 && tvResponse.status === 200) {
      console.log('fetchGenres');
      yield put(fetchDataActions.fetchGenresSuccess(movieResponse.data.genres, tvResponse.data.genres));

    } else {
      yield put(fetchDataActions.fetchGenresFail());
    }
  } catch (err) {
    console.log(err);
    // throw new Error(err);
  }
}

// GRID DATA
export function* fetchGridData(payload) {
  try {
    // axios.interceptors.response.use(request => {
    //   console.log('my request', request);
    // }, error => {
    //   console.log('errorrrr', error);
    // })

    // const axiosInstance = axios.create({baseURL:})
    const response = yield axios.get(payload.url);

    if (response.status === 200) {
      console.log('fetchGridData');
      yield put(fetchDataActions.fetchGridDataSuccess(response.data.results, response.data.total_pages));

    } else if (response.status === 307) {
      console.log('Status 307 redirect', response);
    }
    else {
      throw new Error('Error while fetching grid data');
    }
  } catch (err) {
    if (err.response) {
      console.log('error.response', err.response);
    } else if (err.request) {
      console.log('error.request', err.request);
    } else {
      console.log('else error', err);
    }
    // throw new Error(err);
  }
}

// DETAILS DATA
export function* fetchDetailsData(payload) {
  try {
    const response = yield axios.get(payload.url);

    if (response.status === 200) {
      console.log('fetchDetailsData');
      yield put(fetchDataActions.fetchDetailsDataSuccess(response.data));

    } else {
      yield put(fetchDataActions.fetchDetailsDataFail());
    }

  } catch (err) {
    console.log(err);
    // throw new Error(err);
    // yield put(fetchDataActions.fetchDetailsDataFail());
  }
}

// SEARCH DATA
export function* fetchSearchData(payload) {
  try {
    const response = yield axios.get(payload.url);

    if (response.status === 200) {
      console.log('fetchSearchData');
      yield put(fetchDataActions.fetchSearchDataSuccess(response.data.results, response.data.total_pages));

    } else {
      throw new Error('Error while fetching search data');
    }
  } catch (err) {
    console.log(err);
    // throw new Error(err);
  }
}
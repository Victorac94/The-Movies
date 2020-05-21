import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchGenres, fetchGridData, fetchDetailsData, fetchSearchData } from './fetchDataSaga';

export function* watchActions() {
  yield takeLatest(actionTypes.FETCH_GENRES, fetchGenres);
  yield takeLatest(actionTypes.FETCH_GRID_DATA, fetchGridData);
  yield takeLatest(actionTypes.FETCH_DETAILS_DATA, fetchDetailsData);
  yield takeLatest(actionTypes.FETCH_SEARCH_DATA, fetchSearchData);
}

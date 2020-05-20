import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchGenres, fetchGridData, fetchDetailsData, fetchSearchData } from './fetchDataSaga';

export function* watchActions() {
  yield takeEvery(actionTypes.FETCH_GENRES, fetchGenres);
  yield takeEvery(actionTypes.FETCH_GRID_DATA, fetchGridData);
  yield takeEvery(actionTypes.FETCH_DETAILS_DATA, fetchDetailsData);
  yield takeEvery(actionTypes.FETCH_SEARCH_DATA, fetchSearchData);
}

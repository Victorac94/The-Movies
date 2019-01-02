//takeEvery nos permite escuchar ciertas acciones y hacer algo cuando esto ocurra
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchTrending, fetchData, fetchDetails, fetchSearch, fetchDiscover } from './fetchDataSaga';

export function* watchActions() {
  yield takeEvery(actionTypes.FETCH_TRENDING, fetchTrending);
  yield takeEvery(actionTypes.FETCH_DATA, fetchData);
  yield takeEvery(actionTypes.FETCH_DETAILS, fetchDetails);
  yield takeEvery(actionTypes.FETCH_SEARCH, fetchSearch);
  yield takeEvery(actionTypes.FETCH_DISCOVER, fetchDiscover);
}

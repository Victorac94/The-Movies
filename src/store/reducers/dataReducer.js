import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  data: null,
  fetchingData: false,
  newData: false,
  details: null,
  fetchingDetails: false,
  newDetails: false,
  error: false
};

const fetchData = (state, action) => {
  const obj = {fetchingData: true, newData: false, error: false};
  return updateObject(state, obj);
}

const fetchDataSucceed = (state, action) => {
  const obj = {data: action.data, fetchingData: false, newData: true, error: false};
  return updateObject(state, obj);
}

const fetchDataFailed = (state) => {
  return updateObject(state, {fetchingData: false, error: true});
}

const fetchDetails = (state, action) => {
  return updateObject(state, {fetchingDetails: true, newDetails: false, error: false});
}

const fetchDetailsSucceed = (state, action) => {
  const obj = {details: action.data, fetchingDetails: false, newDetails: true, error: false};
  return updateObject(state, obj);
}

const fetchDetailsFailed = (state) => {
  return updateObject(state, {fetchingDetails: false, error: true});
}

const fetchSearch = (state, action) => {
  return updateObject(state, {fetchingData: true, newData: false, error: false});
}

const fetchSearchSucceed = (state, action) => {
  return updateObject(state, {data: action.data, fetchingData: false, newData: true, error: false});
}

const fetchSearchFailed = (state) => {
  return updateObject(state, {fetchingData: false, error: true});
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_DATA: return fetchData(state, action);
    case actionTypes.FETCH_DATA_SUCCEED: return fetchDataSucceed(state, action);
    case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state);
    case actionTypes.FETCH_DETAILS: return fetchDetails(state, action);
    case actionTypes.FETCH_DETAILS_SUCCEED: return fetchDetailsSucceed(state, action);
    case actionTypes.FETCH_DETAILS_FAILED: return fetchDetailsFailed(state);
    case actionTypes.FETCH_SEARCH: return fetchSearch(state, action);
    case actionTypes.FETCH_SEARCH_SUCCEED: return fetchSearchSucceed(state, action);
    case actionTypes.FETCH_SEARCH_FAILED: return fetchSearchFailed(state);
    default: return state
  }
}

export default reducer;

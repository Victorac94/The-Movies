import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  data: null,
  details: null,
  newDetails: false,
  error: false
};

const fetchDataSucceed = (state, action) => {
  const obj = {data: action.data, error: false};
  return updateObject(state, obj);
}

const fetchDataFailed = (state) => {
  return updateObject(state, {error: true})
}

const fetchDetails = (state, action) => {
  return updateObject(state, {newDetails: false})
}

const fetchDetailsSucceed = (state, action) => {
  const obj = {details: action.data, newDetails: true, error: false};
  return updateObject(state, obj)
}

const fetchDetailsFailed = (state) => {
  return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_DATA_SUCCEED: return fetchDataSucceed(state, action);
    case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state);
    case actionTypes.FETCH_DETAILS: return fetchDetails(state, action);
    case actionTypes.FETCH_DETAILS_SUCCEED: return fetchDetailsSucceed(state, action);
    case actionTypes.FETCH_DETAILS_FAILED: return fetchDetailsFailed(state);
    default: return state
  }
}

export default reducer;

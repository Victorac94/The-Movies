import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  inDetails: false
};

const showDetails = (state, action) => {
  return updateObject(state, {inDetails: true})
};

const goBack = (state, action) => {
  return updateObject(state, {inDetails: false})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAGE_GO_BACK: return goBack(state, action);
    case actionTypes.SHOW_DETAILS: return showDetails(state, action);
    default: return state;
  }
};

export default reducer;

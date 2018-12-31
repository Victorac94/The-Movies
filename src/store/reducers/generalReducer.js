import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { decodeGenre } from '../../shared/decodeGenre';

const initialState = {
  inDetails: false,
  mode: null,
  genre: null,
  media: null,
  page: 1,
  title: ""
};

const setPath = (state, action) => {
  return updateObject(state, {mode: action.params[0], genre: action.params[1]});
}

const resetPage = (state, action) => {
  return updateObject(state, {page: 1});
}

const loadTitle = (state, action) => {
  const title = decodeGenre(action.genre);

  return updateObject(state, {title: title});
}

const showDetails = (state, action) => {
  return updateObject(state, {inDetails: true, media: action.media});
};

const goBack = (state, action) => {
  return updateObject(state, {inDetails: false});
};

const nextPage = (state, action) => {
  return updateObject(state, {page: action.page});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PATH: return setPath(state, action);
    case actionTypes.RESET_PAGE: return resetPage(state, action);
    case actionTypes.LOAD_TITLE: return loadTitle(state, action);
    case actionTypes.PAGE_GO_BACK: return goBack(state, action);
    case actionTypes.SHOW_DETAILS: return showDetails(state, action);
    case actionTypes.NEXT_PAGE: return nextPage(state, action);
    default: return state;
  }
};

export default reducer;

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  inDetails: false,
  media: null,
  title: "Home"
};

const loadTitle = (state, action) => {
  let title = state.title;

  switch (action.genre) {
    case 'now_playing':
      title = "Now Playing";
      break;
    case 'top_rated':
      title = "Top Rated";
      break;
    case 'popular':
      title = "Popular";
      break;
    case 'search':
      title = "Search Results";
      break;
    default:
      title = "Home";
      break;
  }
  return updateObject(state, {title: title});
}

const showDetails = (state, action) => {
  return updateObject(state, {inDetails: true, media: action.media})
};

const goBack = (state, action) => {
  return updateObject(state, {inDetails: false})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TITLE: return loadTitle(state, action);
    case actionTypes.PAGE_GO_BACK: return goBack(state, action);
    case actionTypes.SHOW_DETAILS: return showDetails(state, action);
    default: return state;
  }
};

export default reducer;

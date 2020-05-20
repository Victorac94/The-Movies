import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
// import { decodeGenre } from '../../shared/decodeGenre';

const initialState = {
  isMenuShowing: false,

};

const showMenu = (state, action) => {
  return updateObject(state, { isMenuShowing: true });
}

const hideMenu = (state, action) => {
  return updateObject(state, { isMenuShowing: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MENU: return showMenu(state, action);
    case actionTypes.HIDE_MENU: return hideMenu(state, action);
    default: return state;
  }
};

export default reducer;

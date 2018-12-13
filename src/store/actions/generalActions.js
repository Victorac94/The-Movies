import * as actionTypes from './actionTypes';

export const showDetails = () => {
  return {
    type: actionTypes.SHOW_DETAILS
  }
}

export const goBack = () => {
  return {
    type: actionTypes.PAGE_GO_BACK
  }
}

export const loadTitle = (genre) => {
  return {
    type: actionTypes.LOAD_TITLE,
    genre: genre
  }
}

import * as actionTypes from './actionTypes';

export const showDetails = (media) => {
  return {
    type: actionTypes.SHOW_DETAILS,
    media: media
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

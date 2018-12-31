import * as actionTypes from './actionTypes';

export const setPath = (params) => {
  return {
    type: actionTypes.SET_PATH,
    params: params
  }
}

export const resetPage = () => {
  return {
    type: actionTypes.RESET_PAGE
  }
}

export const showDetails = (media) => {
  return {
    type: actionTypes.SHOW_DETAILS,
    media: media
  }
}

export const loadTitle = (genre) => {
  return {
    type: actionTypes.LOAD_TITLE,
    genre: genre
  }
}

export const goBack = () => {
  return {
    type: actionTypes.PAGE_GO_BACK
  }
}

export const nextPage = (page) => {
  return {
    type: actionTypes.NEXT_PAGE,
    page: page
  }
}

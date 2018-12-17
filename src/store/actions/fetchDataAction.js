import * as actionTypes from './actionTypes';

// NOW PLAYING
export const fetchData = (mode, genre) => {
  return {
    type: actionTypes.FETCH_DATA,
    mode: mode,
    genre: genre
  }
}

export const fetchDataSucceed = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCEED,
    data: data
  }
}

export const fetchDataFailed = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILED
  }
}

// MOVIE DETAILS
export const fetchDetails = (mode, id) => {
  return {
    type: actionTypes.FETCH_DETAILS,
    mode: mode,
    id: id
  }
}

export const fetchDetailsSucceed = (data) => {
  return {
    type: actionTypes.FETCH_DETAILS_SUCCEED,
    data: data
  }
}

export const fetchDetailsFailed = () => {
  return {
    type: actionTypes.FETCH_DETAILS_FAILED
  }
}

export const fetchSearch = (data) => {
  return {
    type: actionTypes.FETCH_SEARCH,
    data: data
  }
}

export const fetchSearchSucceed = (data) => {
  return {
    type: actionTypes.FETCH_SEARCH_SUCCEED,
    data: data
  }
}

export const fetchSearchFailed = () => {
  return {
    type: actionTypes.FETCH_SEARCH_FAILED
  }
}

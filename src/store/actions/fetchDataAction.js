import * as actionTypes from './actionTypes';

// NOW PLAYING
export const fetchData = (mode, genre) => {
  return {
    type: actionTypes.FETCH_DATA,
    mode: mode,
    genre: genre,
    error: false
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
    type: actionTypes.FETCH_DATA_FAILED,
    error: true
  }
}

// MOVIE DETAILS
export const fetchDetails = (mode, id) => {
  return {
    type: actionTypes.FETCH_DETAILS,
    mode: mode,
    id: id,
    error: false
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
    type: actionTypes.FETCH_DETAILS_FAILED,
    error: true
  }
}

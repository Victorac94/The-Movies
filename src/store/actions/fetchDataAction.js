import * as actionTypes from './actionTypes';

// TRENDING
export const fetchTrending = (page) => {
  return {
    type: actionTypes.FETCH_TRENDING,
    page: page
  }
}

export const fetchTrendingSucceed = (data) => {
  return {
    type: actionTypes.FETCH_TRENDING_SUCCEED,
    data: data
  }
}

export const fetchTrendingFailed = () => {
  return {
    type: actionTypes.FETCH_TRENDING_SUCCEED
  }
}

// NOW PLAYING - TOP RATED - POPULAR
export const fetchData = (mode, genre, page) => {
  return {
    type: actionTypes.FETCH_DATA,
    mode: mode,
    genre: genre,
    page: page
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

// SEARCH

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

// DISCOVER

export const fetchDiscover = (mode, genre, page) => {
  return {
    type: actionTypes.FETCH_DISCOVER,
    mode: mode,
    genre: genre,
    page: page
  }
}

export const fetchDiscoverSucceed = (data) => {
  return {
    type: actionTypes.FETCH_DISCOVER_SUCCEED,
    data: data
  }
}

export const fetchDiscoverFailed = (mode, genre) => {
  return {
    type: actionTypes.FETCH_DISCOVER_FAILED
  }
}

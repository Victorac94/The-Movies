import * as actionTypes from './actionTypes';

// HEADER

export const setHeaderTitle = title => {
    return {
        type: actionTypes.SET_HEADER_TITLE,
        title: title
    }
}


// GENRES

export const fetchGenres = lang => {
    return {
        type: actionTypes.FETCH_GENRES,
        lang: lang
    }
}

export const fetchGenresSuccess = (movie, tv) => {
    return {
        type: actionTypes.FETCH_GENRES_SUCCESS,
        movieGenres: movie,
        tvGenres: tv
    }
}

export const fetchGenresFail = () => {
    return {
        type: actionTypes.FETCH_GENRES_FAIL
    }
}


// GRID DATA

export const fetchGridData = url => {
    return {
        type: actionTypes.FETCH_GRID_DATA,
        url: url
    }
}

export const fetchGridDataSuccess = (data, totalPages) => {
    return {
        type: actionTypes.FETCH_GRID_DATA_SUCCESS,
        data: data,
        totalPages: totalPages
    }
}

export const fetchGridDataFail = () => {
    return {
        type: actionTypes.FETCH_GRID_DATA_FAIL,
    }
}


// DETAILS DATA

export const fetchDetailsData = url => {
    return {
        type: actionTypes.FETCH_DETAILS_DATA,
        url: url
    }
}

export const fetchDetailsDataSuccess = data => {
    return {
        type: actionTypes.FETCH_DETAILS_DATA_SUCCESS,
        data: data
    }
}

export const fetchDetailsDataFail = () => {
    return {
        type: actionTypes.FETCH_DETAILS_DATA_FAIL,
    }
}


// SEARCH DATA

export const fetchSearchData = url => {
    return {
        type: actionTypes.FETCH_SEARCH_DATA,
        url: url
    }
}

export const fetchSearchDataSuccess = (data, totalPages) => {
    return {
        type: actionTypes.FETCH_SEARCH_DATA_SUCCESS,
        data: data,
        totalPages: totalPages
    }
}

export const fetchSearchDataFail = () => {
    return {
        type: actionTypes.FETCH_SEARCH_DATA_FAIL,
    }
}
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    movieGenres: null,
    tvGenres: null,
    gridData: null,
    detailsData: null,
    searchData: null,
    headerTitle: '',
}

// HEADER

const setHeaderTitle = (state, action) => {
    return updateObject(state, { headerTitle: action.title });
}

// GENRES

const fetchGenresSuccess = (state, action) => {
    return updateObject(state, { movieGenres: action.movieGenres, tvGenres: action.tvGenres });
}

// GRID DATA

const fetchGridDataSuccess = (state, action) => {
    return updateObject(state, { gridData: action.data });
}

// DETAILS DATA

const fetchDetailsDataSuccess = (state, action) => {
    const title = action.data.title || action.data.name;

    return updateObject(state, { detailsData: action.data, headerTitle: title });
}

// SEARCH DATA

const fetchSearchDataSuccess = (state, action) => {
    return updateObject(state, { searchData: action.data });
}

// REDUCER

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HEADER_TITLE: return setHeaderTitle(state, action);
        case actionTypes.FETCH_GENRES_SUCCESS: return fetchGenresSuccess(state, action);
        case actionTypes.FETCH_GRID_DATA_SUCCESS: return fetchGridDataSuccess(state, action);
        case actionTypes.FETCH_DETAILS_DATA_SUCCESS: return fetchDetailsDataSuccess(state, action);
        case actionTypes.FETCH_SEARCH_DATA_SUCCESS: return fetchSearchDataSuccess(state, action);
        default: return state
    }
}

export default reducer;

import * as Sites_types from './sites.types';

export const fetchSitesStart = () => ({
    type: Sites_types.FETCH_SITE_START,
});

export const fetchSitesSuccess = siteList => ({
    type: Sites_types.FETCH_SITE_SUCCESS,
    payload: siteList
});

export const fetchSitesFailure = errorMessage => ({
    type: Sites_types.FETCH_SITE_FAILURE,
    payload: errorMessage
});

// Sites Addition Actions
export const addSitesStart = (newData) => ({
    type: Sites_types.ADD_SITE_START,
    payload: newData
});


export const addSitesFailure = errorMessage => ({
    type: Sites_types.ADD_SITE_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delSitesStart = (row) => ({
    type: Sites_types.DEL_SITE_START,
    payload: row
});

export const delSitesFailure = errorMessage => ({
    type: Sites_types.DEL_SITE_FAILURE,
    payload: errorMessage
});

//state Edit actions
export const editSitesStart = (row) => ({
    type: Sites_types.EDIT_SITE_START,
    payload: row
});

export const editSitesFailure = errorMessage => ({
    type: Sites_types.EDIT_SITE_FAILURE,
    payload: errorMessage
});
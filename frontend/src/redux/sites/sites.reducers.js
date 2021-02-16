import * as Sites_types from './sites.types';

const INITIAL_STATE = {
    siteList: [],
    isSiteFetching: false,
    errorSiteMessage: undefined
};


const siteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //SITES Fetch
        case Sites_types.FETCH_SITE_START:
            return {
                ...state,
                isSiteFetching: true
            };
        case Sites_types.FETCH_SITE_SUCCESS:
            return {
                ...state,
                isSiteFetching: false,
                siteList: action.payload
            };
        case Sites_types.FETCH_SITE_FAILURE:
            return {
                ...state,
                isSiteFetching: false,
                errorSiteMessage: action.payload
            };
            //SITES Add
        case Sites_types.ADD_SITE_START:
            return {
                ...state,
                isSiteFetching: true
            };
        case Sites_types.ADD_SITE_FAILURE:
            return {
                ...state,
                isSiteFetching: false,
                errorSiteMessage: action.payload
            };
            //SITES Delete
        case Sites_types.DEL_SITE_START:
            return {
                ...state,
                isSiteFetching: true
            };
        case Sites_types.DEL_SITE_FAILURE:
            return {
                ...state,
                isSiteFetching: false,
                errorSiteMessage: action.payload
            };
            //SITES Edit
        case Sites_types.EDIT_SITE_START:
            return {
                ...state,
                isSiteFetching: true
            };
        case Sites_types.EDIT_SITE_FAILURE:
            return {
                ...state,
                isSiteFetching: false,
                errorSiteMessage: action.payload
            };
        default:
            return state;
    }
};

export default siteReducer;
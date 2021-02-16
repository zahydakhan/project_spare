import * as siteOrder_types from './site_order.types';

const INITIAL_STATE = {
    siteOrderList: [],
    isSiteOrderFetching: false,
    errorSiteOrderMessage: ''
};


const siteOrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Site Order Fetch
        case siteOrder_types.FETCH_SITE_ORDER_START:
            return {
                ...state,
                isSiteOrderFetching: true
            };
        case siteOrder_types.FETCH_SITE_ORDER_SUCCESS:
            return {
                ...state,
                isSiteOrderFetching: false,
                siteOrderList: action.payload
            };
        case siteOrder_types.FETCH_SITE_ORDER_FAILURE:
            return {
                ...state,
                isSiteOrderFetching: false,
                errorSiteOrderMessage: action.payload
            };
            //Site Order Add
        case siteOrder_types.ADD_SITE_ORDER_START:
            return {
                ...state,
                isSiteOrderFetching: true
            };
        case siteOrder_types.ADD_SITE_ORDER_FAILURE:
            return {
                ...state,
                isSiteOrderFetching: false,
                errorSiteOrderMessage: action.payload
            };
            //Site Order Delete
        case siteOrder_types.DEL_SITE_ORDER_START:
            return {
                ...state,
                isSiteOrderFetching: true
            };
        case siteOrder_types.DEL_SITE_ORDER_FAILURE:
            return {
                ...state,
                isSiteOrderFetching: false,
                errorSiteOrderMessage: action.payload
            };
            //Site Order Edit
        case siteOrder_types.EDIT_SITE_ORDER_START:
            return {
                ...state,
                isSiteOrderFetching: true
            };
        case siteOrder_types.EDIT_SITE_ORDER_FAILURE:
            return {
                ...state,
                isSiteOrderFetching: false,
                errorSiteOrderMessage: action.payload
            };
        default:
            return state;
    }
};

export default siteOrderReducer;
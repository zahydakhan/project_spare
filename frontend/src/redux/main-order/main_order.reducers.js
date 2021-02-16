import * as mainOrder_types from './main_order.types';

const INITIAL_STATE = {
    mainOrderList: [],
    isMainOrderFetching: false,
    errorMainOrderMessage: '',
    monthlyOrderList: [],
    isMonthlyOrderFetching: false,
    errorMonthlyOrderMessage: ''
};


const mainOrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Site Order Fetch
        case mainOrder_types.FETCH_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.FETCH_MAIN_ORDER_SUCCESS:
            return {
                ...state,
                isMainOrderFetching: false,
                mainOrderList: action.payload
            };
        case mainOrder_types.FETCH_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Add
        case mainOrder_types.ADD_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.ADD_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Delete
        case mainOrder_types.DEL_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.DEL_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Edit
        case mainOrder_types.EDIT_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.EDIT_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Monthly Order Fetch
        case mainOrder_types.FETCH_MONTHLY_ORDER_START:
            return {
                ...state,
                isMonthlyOrderFetching: true
            };
        case mainOrder_types.FETCH_MONTHLY_ORDER_SUCCESS:
            return {
                ...state,
                isMonthlyOrderFetching: false,
                monthlyOrderList: action.payload
            };
        case mainOrder_types.FETCH_MONTHLY_ORDER_FAILURE:
            return {
                ...state,
                isMonthlyOrderFetching: false,
                errorMonthlyOrderMessage: action.payload
            };
        default:
            return state;
    }
};

export default mainOrderReducer;
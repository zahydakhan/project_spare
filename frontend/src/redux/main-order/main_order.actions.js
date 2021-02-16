import * as mainOrder_types from './main_order.types';

export const fetchMainOrderStart = (mainOrder) => ({
    type: mainOrder_types.FETCH_MAIN_ORDER_START,
    payload: mainOrder,
});

export const fetchMainOrderSuccess = (mainOrderList) => ({
    type: mainOrder_types.FETCH_MAIN_ORDER_SUCCESS,
    payload: mainOrderList,
});

export const fetchMainOrderFailure = (errorMessage) => ({
    type: mainOrder_types.FETCH_MAIN_ORDER_FAILURE,
    payload: errorMessage,
});

// MainOrder Addition Actions
export const addMainOrderStart = (newData) => ({
    type: mainOrder_types.ADD_MAIN_ORDER_START,
    payload: newData,
});

export const addMainOrderFailure = (errorMessage) => ({
    type: mainOrder_types.ADD_MAIN_ORDER_FAILURE,
    payload: errorMessage,
});

//MainOrder Deletion actions
export const delMainOrderStart = (row) => ({
    type: mainOrder_types.DEL_MAIN_ORDER_START,
    payload: row,
});

export const delMainOrderFailure = (errorMessage) => ({
    type: mainOrder_types.DEL_MAIN_ORDER_FAILURE,
    payload: errorMessage,
});

//MainOrder Edit actions
export const editMainOrderStart = (editData) => ({
    type: mainOrder_types.EDIT_MAIN_ORDER_START,
    payload: editData,
});

export const editMainOrderFailure = (errorMessage) => ({
    type: mainOrder_types.EDIT_MAIN_ORDER_FAILURE,
    payload: errorMessage,
});

//Monthly order fetch actions
export const fetchMonthlyOrderStart = (monthlyOrder) => ({
    type: mainOrder_types.FETCH_MONTHLY_ORDER_START,
    payload: monthlyOrder,
});

export const fetchMonthlyOrderSuccess = (monthlyOrderList) => ({
    type: mainOrder_types.FETCH_MONTHLY_ORDER_SUCCESS,
    payload: monthlyOrderList,
});

export const fetchMonthlyOrderFailure = (errorMessage) => ({
    type: mainOrder_types.FETCH_MONTHLY_ORDER_FAILURE,
    payload: errorMessage,
});
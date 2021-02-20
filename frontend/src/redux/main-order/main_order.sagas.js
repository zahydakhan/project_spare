import { takeLatest, put, call } from 'redux-saga/effects';

import * as mainOrder_types from './main_order.types';
import axios from '../../utils/axios1';

import {
    fetchMainOrderStart,
    fetchMainOrderSuccess,
    fetchMainOrderFailure,
    addMainOrderStart,
    addMainOrderFailure,
    delMainOrderStart,
    delMainOrderFailure,
    editMainOrderStart,
    editMainOrderFailure,
    fetchMonthlyOrderSuccess,
    fetchMonthlyOrderFailure

} from './main_order.actions';

//Fetch Site Order Saga
export function* fetchMainOrder(action) {
    let vendor_name = action.payload.vendor_name
    let site = action.payload.site
    let month = action.payload.month
    console.log('running Site Order Fetch Start saga');
    
    try {
        const mainOrdersList = yield axios.get(
            `/pr/mainorderfilter/?vendor_name={$vendor_name}&site={$site}&month={$month}`);
        console.log(mainOrdersList);
        yield put(fetchMainOrderSuccess(mainOrdersList.data));
    } catch (error) {
        yield put(fetchMainOrderFailure(error.message));
    }
}

export function* onFetchMainOrderStart() {
        yield takeLatest(mainOrder_types.FETCH_MAIN_ORDER_START, fetchMainOrder);
    }
    //Add ROLLERS Saga
export function* addMainOrder(action) {
    try {
        console.log('running main order add start saga');
        console.log(action.payload);
        const mainOrderList = yield axios.post(`/pr/main_pr/`, action.payload);
        console.log(mainOrderList);

        //yield put(addRollerSuccess(sitesList.data));
        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(addMainOrderFailure(error.message));
    }
}

export function* onAddMainOrderStart() {
    yield takeLatest(mainOrder_types.ADD_MAIN_ORDER_START, addMainOrder);
}

//Delete ROLLERS Saga
export function* delMainOrder(action) {
    try {
        console.log('running site order delete axios');
        console.log(action.payload);
        const mainOrderList = yield axios.delete(`/pr/main_pr/` + action.payload);
        console.log(mainOrderList);

        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(delMainOrderFailure(error.message));
    }
}

export function* onDelMainOrderStart() {
    yield takeLatest(mainOrder_types.DEL_MAIN_ORDER_START, delMainOrder);
}

//Edit ROLLERS Saga
export function* editMainOrder(action) {
    try {
        console.log('Running Site Order Edit saga');
        let rowId = action.payload.rollerId;
        let values = action.payload.values;
        const mainOrderList = yield axios.put(`/pr/main_pr/${rowId}/`, values);
        console.log(mainOrderList);

        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(editMainOrderFailure(error.message));
    }
}

export function* onEditMainOrderStart() {
    yield takeLatest(mainOrder_types.EDIT_MAIN_ORDER_START, editMainOrder);
}

//Fetch Monthly Order Saga
export function* fetchMonthlyOrder(action) {
    console.log('running monthly Order Fetch Start saga');
    let pageNo = action.payload.pageNo;
	let rowsPerPage = action.payload.rowsPerPage;
	let searchstr = action.payload.searchstr;
    try {
        const monthlyOrdersList = yield axios.get(
            `/pr/mainorderlist/?search=${searchstr}&p=${
				pageNo + 1
			}&records=${rowsPerPage}`);
        console.log('this is the response of monthly saga', monthlyOrdersList);
        yield put(fetchMonthlyOrderSuccess(monthlyOrdersList.data));
    } catch (error) {
        yield put(fetchMonthlyOrderFailure(error.message));
    }
}

export function* onFetchMonthlyOrderStart() {
        yield takeLatest(mainOrder_types.FETCH_MONTHLY_ORDER_START, fetchMonthlyOrder);
    }
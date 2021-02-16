import { takeLatest, put, call } from 'redux-saga/effects';

import * as siteOrder_types from './site_order.types';
import axios from '../../utils/axios1';

import {
	fetchSiteOrderStart,
	fetchSiteOrderSuccess,
	fetchSiteOrderFailure,
	addSiteOrderStart,
	addSiteOrderFailure,
	delSiteOrderStart,
	delSiteOrderFailure,
	editSiteOrderStart,
	editSiteOrderFailure,

} from './site_order.actions';

//Fetch Site Order Saga
export function* fetchSiteOrder(action) {
	console.log('running Site Order Fetch Start saga');
	let pageNo = action.payload.pageNo;
	let rowsPerPage = action.payload.rowsPerPage;
	let searchstr = action.payload.searchstr;
	console.log(pageNo, rowsPerPage, searchstr)
	try {
		const siteOrdersList = yield axios.get(
			`/pr/siteorderlist/?search=${searchstr}&p=${
				pageNo + 1
			}&records=${rowsPerPage}`
		);
		console.log(siteOrdersList);
		yield put(fetchSiteOrderSuccess(siteOrdersList.data));
	} catch (error) {
		yield put(fetchSiteOrderFailure(error.message));
	}
}

export function* onFetchSiteOrderStart() {
	yield takeLatest(siteOrder_types.FETCH_SITE_ORDER_START, fetchSiteOrder);
}
//Add ROLLERS Saga
export function* addSiteOrder(action) {
	try {
		console.log('running site order add start saga');
		console.log(action.payload);
		const siteOrderList = yield axios.post(`/pr/sites_pr/`, action.payload);
		console.log(siteOrderList);

		//yield put(addRollerSuccess(sitesList.data));
		yield put(fetchSiteOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(addSiteOrderFailure(error.message));
	}
}

export function* onAddSiteOrderStart() {
	yield takeLatest(siteOrder_types.ADD_SITE_ORDER_START, addSiteOrder);
}

//Delete ROLLERS Saga
export function* delSiteOrder(action) {
	try {
		console.log('running site order delete axios');
		console.log(action.payload);
		const siteOrderList = yield axios.delete(`/pr/sites_pr/` + action.payload);
		console.log(siteOrderList);

		yield put(fetchSiteOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(delSiteOrderFailure(error.message));
	}
}

export function* onDelSiteOrderStart() {
	yield takeLatest(siteOrder_types.DEL_SITE_ORDER_START, delSiteOrder);
}

//Edit ROLLERS Saga
export function* editSiteOrder(action) {
	try {
		console.log('Running Site Order Edit saga');
		let rowId = action.payload.rollerId;
		let values = action.payload.values;
		const siteOrderList = yield axios.put(`/pr/sites_pr/${rowId}/`, values);
		console.log(siteOrderList);

		yield put(fetchSiteOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(editSiteOrderFailure(error.message));
	}
}

export function* onEditSiteOrderStart() {
	yield takeLatest(siteOrder_types.EDIT_SITE_ORDER_START, editSiteOrder);
}

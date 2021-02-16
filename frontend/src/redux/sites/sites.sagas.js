import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

import * as Sites_types from './sites.types';
import axios from '../../utils/axios1';

import {
	editSitesStart,
	editSitesSuccess,
	editSitesFailure,
	delSitesStart,
	delSitesSuccess,
	delSitesFailure,
	addSitesStart,
	addSitesFailure,
	fetchSitesStart,
	fetchSitesSuccess,
	fetchSitesFailure,
} from './sites.actions';

//Fetch SITES Saga
export function* fetchSites() {
	console.log('running Fetch Start saga');
	try {
		const sitesList = yield axios.get(`/sites/sites/`);
		console.log(sitesList);
		console.log(sitesList.data.data);
		yield put(fetchSitesSuccess(sitesList.data.data));
	} catch (error) {
		yield put(fetchSitesFailure(error.message));
	}
}

export function* onFetchSitesStart() {
	yield takeLatest(Sites_types.FETCH_SITE_START, fetchSites);
}
//Add SITES Saga
export function* addSites(action) {
	try {
		console.log('running add start saga');
		const sitesList = yield axios.post(`/sites/sites/`, action.payload);
		console.log(sitesList);

		//yield put(addSitesSuccess(sitesList.data));
		yield put(fetchSitesStart());
	} catch (error) {
		yield put(addSitesFailure(error.message));
	}
}

export function* onAddSitesStart() {
	yield takeLatest(Sites_types.ADD_SITE_START, addSites);
}

//Delete SITES Saga
export function* delSites(action) {
	try {
		console.log('running delete axios');
		console.log(action.payload);
		const sitesList = yield axios.delete(`/sites/sites/` + action.payload);
		console.log(sitesList);

		yield put(fetchSitesStart());
	} catch (error) {
		yield put(delSitesFailure(error.message));
	}
}

export function* onDelSitesStart() {
	yield takeLatest(Sites_types.DEL_SITE_START, delSites);
}

//Edit SITES Saga
export function* editSites(action) {
	try {
		console.log('running Site Edit saga');
		let rowId = action.payload.contractId;
		let values = action.payload.values;
		const sitesList = yield axios.put(`/sites/sites/${rowId}/`, values);
		console.log(sitesList);

		yield put(fetchSitesStart());
	} catch (error) {
		yield put(editSitesFailure(error.message));
	}
}

export function* onEditSitesStart() {
	yield takeLatest(Sites_types.EDIT_SITE_START, editSites);
}

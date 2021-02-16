import { takeLatest, put, call } from 'redux-saga/effects';
import * as Localspare_types from './localspare.types';

import axios from '../../utils/axios1';

import {
	editLocalspareFailure,
	delLocalspareFailure,
	addLocalspareFailure,
	fetchLocalspareStart,
	fetchLocalspareSuccess,
	fetchLocalspareFailure,
} from './localspare.actions';

//Fetch Localspare Saga
export function* fetchLocalspare(action) {
	console.log('running Localspare Fetch Start saga');
	let pageNo = action.payload.pageNo;
	let rowsPerPage = action.payload.rowsPerPage;
	let searchstr = action.payload.searchstr;
	try {
		const localspareList = yield axios.get(
			`/sp/localsparelist/?search=${searchstr}&p=${
				pageNo + 1
			}&records=${rowsPerPage}`
		);
		console.log(localspareList);
		console.log(localspareList.data);
		yield put(fetchLocalspareSuccess(localspareList.data));
	} catch (error) {
		yield put(fetchLocalspareFailure(error.message));
	}
}

export function* onFetchLocalspareStart() {
	yield takeLatest(Localspare_types.FETCH_LOCALSPARE_START, fetchLocalspare);
}
//Add LOCALSPARES Saga
export function* addLocalspare(action) {
	try {
		console.log('running Localspare add start saga');
		const localspareList = yield axios.post(
			`/sp/comparison_spareparts/`,
			action.payload
		);
		console.log(localspareList);

		//yield put(addLocalspareSuccess(sitesList.data));
		yield put(
			fetchLocalspareStart({
				pageNo: 0,
				rowsPerPage: 10,
				searchstr: '',
			})
		);
	} catch (error) {
		yield put(addLocalspareFailure(error.message));
	}
}

export function* onAddLocalspareStart() {
	yield takeLatest(Localspare_types.ADD_LOCALSPARE_START, addLocalspare);
}

//Delete LOCALSPARES Saga
export function* delLocalspare(action) {
	try {
		console.log('running Localspare delete axios');
		console.log(action.payload);
		const localspareList = yield axios.delete(
			`/sp/comparison_spareparts/` + action.payload
		);
		console.log(localspareList);

		yield put(
			fetchLocalspareStart({
				pageNo: 0,
				rowsPerPage: 10,
				searchstr: '',
			})
		);
	} catch (error) {
		yield put(delLocalspareFailure(error.message));
	}
}

export function* onDelLocalspareStart() {
	yield takeLatest(Localspare_types.DEL_LOCALSPARE_START, delLocalspare);
}

//Edit LOCALSPARES Saga
export function* editLocalspare(action) {
	try {
		console.log('running Localspare Edit saga');
		let rowId = action.payload.spareId;
		let values = action.payload.values;
		const localspareList = yield axios.put(
			`/sp/comparison_spareparts/${rowId}/`,
			values
		);
		console.log(localspareList);

		yield put(
			fetchLocalspareStart({
				pageNo: 0,
				rowsPerPage: 10,
				searchstr: '',
			})
		);
	} catch (error) {
		yield put(editLocalspareFailure(error.message));
	}
}

export function* onEditLocalspareStart() {
	yield takeLatest(Localspare_types.EDIT_LOCALSPARE_START, editLocalspare);
}

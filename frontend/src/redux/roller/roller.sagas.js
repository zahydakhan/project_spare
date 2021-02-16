import { takeLatest, put, call } from 'redux-saga/effects';

import * as Roller_types from './roller.types';
import axios from '../../utils/axios1';

import {
	editRollerFailure,
	delRollerFailure,
	addRollerFailure,
	fetchRollerStart,
	fetchRollerSuccess,
	fetchRollerFailure,
} from './roller.actions';

//Fetch Roller Saga
export function* fetchRoller(action) {
	console.log('running Roller Fetch Start saga');
	let pageNo = action.payload.pageNo;
	let rowsPerPage = action.payload.rowsPerPage;
	let searchstr = action.payload.searchstr;
	try {
		const rollerList = yield axios.get(
			`/sp/rollerlist/?search=${searchstr}&p=${
				pageNo + 1
			}&records=${rowsPerPage}`
		);
		console.log(rollerList);
		yield put(fetchRollerSuccess(rollerList.data));
	} catch (error) {
		yield put(fetchRollerFailure(error.message));
	}
}

export function* onFetchRollerStart() {
	yield takeLatest(Roller_types.FETCH_ROLLER_START, fetchRoller);
}
//Add ROLLERS Saga
export function* addRoller(action) {
	try {
		console.log('running Roller add start saga');
		console.log(action.payload);
		const rollerList = yield axios.post(`/sp/roller/`, action.payload);
		console.log(rollerList);

		//yield put(addRollerSuccess(sitesList.data));
		yield put(fetchRollerStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(addRollerFailure(error.message));
	}
}

export function* onAddRollerStart() {
	yield takeLatest(Roller_types.ADD_ROLLER_START, addRoller);
}

//Delete ROLLERS Saga
export function* delRoller(action) {
	try {
		console.log('running Roller delete axios');
		console.log(action.payload);
		const rollerList = yield axios.delete(`/sp/roller/` + action.payload);
		console.log(rollerList);

		yield put(fetchRollerStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(delRollerFailure(error.message));
	}
}

export function* onDelRollerStart() {
	yield takeLatest(Roller_types.DEL_ROLLER_START, delRoller);
}

//Edit ROLLERS Saga
export function* editRoller(action) {
	try {
		console.log('running Roller Edit saga');
		let rowId = action.payload.rollerId;
		let values = action.payload.values;
		const rollerList = yield axios.put(`/sp/roller/${rowId}/`, values);
		console.log(rollerList);

		yield put(fetchRollerStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
	} catch (error) {
		yield put(editRollerFailure(error.message));
	}
}

export function* onEditRollerStart() {
	yield takeLatest(Roller_types.EDIT_ROLLER_START, editRoller);
}

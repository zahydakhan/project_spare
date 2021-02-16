import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as Sparepart_types from './spareparts.types';
import axios from '../../utils/axios1'

import {
    editSparepartFailure,
    delSparepartFailure,
    addSparepartFailure,
    fetchSparepartStart,
    fetchSparepartSuccess,
    fetchSparepartFailure,
    fetchSparepartFullSuccess
} from './spareparts.actions';


//Fetch SPAREPARTS Saga
export function* fetchSparepart(action) {
    console.log("running Fetch Sparepart Start saga")
    let pageNo = action.payload.pageNo
    let rowsPerPage = action.payload.rowsPerPage
    let searchstr = action.payload.searchstr
    try {
        const sparepartsList = yield axios.get(`/sp/sparelist/?search=${searchstr}&p=${pageNo+1}&records=${rowsPerPage}`);
        console.log(sparepartsList)
        console.log(sparepartsList.data)
        yield put(fetchSparepartSuccess(sparepartsList.data));
    } catch (error) {
        yield put(fetchSparepartFailure(error.message));
    }
}

export function* onFetchSparepartStart() {
        yield takeLatest(Sparepart_types.FETCH_SPAREPART_START, fetchSparepart);
    }
    //Add SPAREPARTS Saga
export function* addSparepart(action) {
    try {
        console.log('running add sparepart start saga')
        const sparepartsList = yield axios.post(`/sp/spareparts/`, action.payload);
        console.log(sparepartsList)

        yield put(fetchSparepartStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(addSparepartFailure(error.message));
    }
}

export function* onAddSparepartStart() {
    yield takeLatest(Sparepart_types.ADD_SPAREPART_START, addSparepart);
}

//Delete SPAREPARTS Saga
export function* delSparepart(action) {
    try {
        console.log('running delete sparepart axios')
        console.log(action.payload)
        const sparepartsList = yield axios.delete(`/sp/spareparts/` + action.payload);
        console.log(sparepartsList)

        yield put(fetchSparepartStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(delSparepartFailure(error.message));
    }
}

export function* onDelSparepartStart() {
    yield takeLatest(Sparepart_types.DEL_SPAREPART_START, delSparepart);
}

//Edit SPAREPARTS Saga
export function* editSparepart(action) {
    try {
        console.log('running sparepart Edit saga')
        let rowId = action.payload.spareId
        let values = action.payload.values
        const sparepartsList = yield axios.put(`/sp/spareparts/${rowId}/`, values);
        console.log(sparepartsList)

        yield put(fetchSparepartStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(editSparepartFailure(error.message));
    }
}

export function* onEditSparepartStart() {
    yield takeLatest(Sparepart_types.EDIT_SPAREPART_START, editSparepart);
}


//Fetch FULL SPAREPARTS Saga
export function* fetchSparepartFull() {
    console.log("running Fetch Sparepart Start saga")
    try {
        const sparepartsListFull = yield axios.get(`/sp/spareparts/`);
        console.log(sparepartsListFull)
        console.log(sparepartsListFull.data)
        yield put(fetchSparepartFullSuccess(sparepartsListFull.data));
    } catch (error) {
        yield put(fetchSparepartFullFailure(error.message));
    }
}

export function* onFetchSparepartFullStart() {
    yield takeLatest(Sparepart_types.FETCH_SPAREPARTFULL_START, fetchSparepartFull);
}
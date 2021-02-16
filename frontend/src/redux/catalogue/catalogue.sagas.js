import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as catalogue_types from './catalogue.types';
import axios from '../../utils/axios1'

import {
    fetchSparepartMLStart,
    fetchSparepartMLSuccess,
    fetchSparepartMLFailure,
    fetchSparepartMPStart,
    fetchSparepartMPSuccess,
    fetchSparepartMPFailure,
    fetchSparepartGETStart,
    fetchSparepartGETSuccess,
    fetchSparepartGETFailure,
} from './catalogue.actions';

//Fetch SPAREPARTS ML Saga
export function* fetchSparepartML(action) {
    console.log("running Fetch Sparepart ML Start saga")
    let pageNo = action.payload.pageNo
    let rowsPerPage = action.payload.rowsPerPage
    let searchstr = action.payload.searchstr
    try {
        const sparepartsListML = yield axios.get(`/sp/spare_mn/?search=${searchstr}&p=${pageNo+1}&records=${rowsPerPage}`);
        console.log(sparepartsListML)
        console.log(sparepartsListML.data)
        yield put(fetchSparepartMLSuccess(sparepartsListML.data));
    } catch (error) {
        yield put(fetchSparepartMLFailure(error.message));
    }
}

export function* onFetchSparepartMLStart() {
    yield takeLatest(catalogue_types.FETCH_SPAREPART_ML_START, fetchSparepartML);
}

//Fetch SPAREPARTS MP Saga
export function* fetchSparepartMP(action) {
    console.log("running Fetch Sparepart MP Start saga")
    let pageNo = action.payload.pageNo
    let rowsPerPage = action.payload.rowsPerPage
    let searchstr = action.payload.searchstr
    try {
        const sparepartsListMP = yield axios.get(`/sp/spare_mp/?search=${searchstr}&p=${pageNo+1}&records=${rowsPerPage}`);
        console.log(sparepartsListMP)
        console.log(sparepartsListMP.data)
        yield put(fetchSparepartMPSuccess(sparepartsListMP.data));
    } catch (error) {
        yield put(fetchSparepartMPFailure(error.message));
    }
}

export function* onFetchSparepartMPStart() {
    yield takeLatest(catalogue_types.FETCH_SPAREPART_MP_START, fetchSparepartMP);
}


//Fetch SPAREPARTS GET Saga
export function* fetchSparepartGET(action) {
    console.log("running Fetch Sparepart GET Start saga")
    let pageNo = action.payload.pageNo
    let rowsPerPage = action.payload.rowsPerPage
    let searchstr = action.payload.searchstr
    try {
        const sparepartsListGET = yield axios.get(`/sp/spare_get/?search=${searchstr}&p=${pageNo+1}&records=${rowsPerPage}`);
        console.log(sparepartsListGET)
        console.log(sparepartsListGET.data)
        yield put(fetchSparepartGETSuccess(sparepartsListGET.data));
    } catch (error) {
        yield put(fetchSparepartGETFailure(error.message));
    }
}

export function* onFetchSparepartGETStart() {
    yield takeLatest(catalogue_types.FETCH_SPAREPART_GET_START, fetchSparepartGET);
}
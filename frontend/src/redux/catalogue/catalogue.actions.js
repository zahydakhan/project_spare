import * as catalogue_types from './catalogue.types';

export const fetchSparepartMLStart = (pageInfo) => ({
    type: catalogue_types.FETCH_SPAREPART_ML_START,
    payload: pageInfo
});

export const fetchSparepartMLSuccess = sparepartList => ({
    type: catalogue_types.FETCH_SPAREPART_ML_SUCCESS,
    payload: sparepartList
});

export const fetchSparepartMLFailure = errorMessage => ({
    type: catalogue_types.FETCH_SPAREPART_ML_FAILURE,
    payload: errorMessage
});

export const fetchSparepartMPStart = (pageInfo) => ({
    type: catalogue_types.FETCH_SPAREPART_MP_START,
    payload: pageInfo
});

export const fetchSparepartMPSuccess = sparepartList => ({
    type: catalogue_types.FETCH_SPAREPART_MP_SUCCESS,
    payload: sparepartList
});

export const fetchSparepartMPFailure = errorMessage => ({
    type: catalogue_types.FETCH_SPAREPART_MP_FAILURE,
    payload: errorMessage
});

export const fetchSparepartGETStart = (pageInfo) => ({
    type: catalogue_types.FETCH_SPAREPART_GET_START,
    payload: pageInfo
});

export const fetchSparepartGETSuccess = sparepartList => ({
    type: catalogue_types.FETCH_SPAREPART_GET_SUCCESS,
    payload: sparepartList
});

export const fetchSparepartGETFailure = errorMessage => ({
    type: catalogue_types.FETCH_SPAREPART_GET_FAILURE,
    payload: errorMessage
});
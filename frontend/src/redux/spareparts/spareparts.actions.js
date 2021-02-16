import * as sparepart_types from './spareparts.types';

export const fetchSparepartStart = (pageInfo) => ({
    type: sparepart_types.FETCH_SPAREPART_START,
    payload: pageInfo
});

export const fetchSparepartSuccess = sparepartList => ({
    type: sparepart_types.FETCH_SPAREPART_SUCCESS,
    payload: sparepartList
});

export const fetchSparepartFailure = errorMessage => ({
    type: sparepart_types.FETCH_SPAREPART_FAILURE,
    payload: errorMessage
});

// Sparepart Addition Actions
export const addSparepartStart = (newData) => ({
    type: sparepart_types.ADD_SPAREPART_START,
    payload: newData
});

export const addSparepartFailure = errorMessage => ({
    type: sparepart_types.ADD_SPAREPART_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delSparepartStart = (row) => ({
    type: sparepart_types.DEL_SPAREPART_START,
    payload: row
});


export const delSparepartFailure = errorMessage => ({
    type: sparepart_types.DEL_SPAREPART_FAILURE,
    payload: errorMessage
});

//state Edit actions
export const editSparepartStart = (row) => ({
    type: sparepart_types.EDIT_SPAREPART_START,
    payload: row
});

export const editSparepartFailure = errorMessage => ({
    type: sparepart_types.EDIT_SPAREPART_FAILURE,
    payload: errorMessage
});


//GET full list of spareparts

export const fetchSparepartFullStart = () => ({
    type: sparepart_types.FETCH_SPAREPARTFULL_START,
});

export const fetchSparepartFullSuccess = sparepartList => ({
    type: sparepart_types.FETCH_SPAREPARTFULL_SUCCESS,
    payload: sparepartList
});

export const fetchSparepartFullFailure = errorMessage => ({
    type: sparepart_types.FETCH_SPAREPARTFULL_FAILURE,
    payload: errorMessage
});
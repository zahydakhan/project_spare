import * as sparepart_types from './spareparts.types';

const INITIAL_STATE = {
    sparepartList: [],
    sparepartListFull: [],
    isSparepartFetching: false,
    errorSparepartMessage: undefined
};


const sparepartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //SPAREPARTS Fetch
        case sparepart_types.FETCH_SPAREPART_START:
            return {
                ...state,
                isSparepartFetching: true
            };
        case sparepart_types.FETCH_SPAREPART_SUCCESS:
            return {
                ...state,
                isSparepartFetching: false,
                sparepartList: action.payload
            };
        case sparepart_types.FETCH_SPAREPART_FAILURE:
            return {
                ...state,
                isSparepartFetching: false,
                errorSparepartMessage: action.payload
            };
            //SPAREPART FETCH FULL
        case sparepart_types.FETCH_SPAREPARTFULL_START:
            return {
                ...state,
                isSparepartFetching: true
            };
        case sparepart_types.FETCH_SPAREPARTFULL_SUCCESS:
            return {
                ...state,
                isSparepartFetching: false,
                sparepartListFull: action.payload
            };
        case sparepart_types.FETCH_SPAREPARTFULL_FAILURE:
            return {
                ...state,
                isSparepartFetching: false,
                errorSparepartMessage: action.payload
            };
            //SPAREPARTS Add
        case sparepart_types.ADD_SPAREPART_START:
            return {
                ...state,
                isSparepartFetching: true
            };
        case sparepart_types.ADD_SPAREPART_FAILURE:
            return {
                ...state,
                isSparepartFetching: false,
                errorSparepartMessage: action.payload
            };
            //SPAREPARTS Delete
        case sparepart_types.DEL_SPAREPART_START:
            return {
                ...state,
                isSparepartFetching: true
            };
        case sparepart_types.DEL_SPAREPART_FAILURE:
            return {
                ...state,
                isSparepartFetching: false,
                errorSparepartMessage: action.payload
            };
            //SPAREPARTS Edit
        case sparepart_types.EDIT_SPAREPART_START:
            return {
                ...state,
                isSparepartFetching: true
            };
        case sparepart_types.EDIT_SPAREPART_FAILURE:
            return {
                ...state,
                isSparepartFetching: false,
                errorSparepartMessage: action.payload
            };
        default:
            return state;
    }
};

export default sparepartReducer;
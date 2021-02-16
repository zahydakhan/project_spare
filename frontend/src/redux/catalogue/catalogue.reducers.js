import * as catalogue_types from './catalogue.types';

const INITIAL_STATE = {
    sparepartMLList: [],
    isSparepartMLFetching: false,
    errorSparepartMLMessage: undefined,
    sparepartMPList: [],
    isSparepartMPFetching: false,
    errorSparepartMPMessage: undefined,
    sparepartGETList: [],
    isSparepartGETFetching: false,
    errorSparepartGETMessage: undefined,
};


const cataloguetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //SPAREPARTS ML
        case catalogue_types.FETCH_SPAREPART_ML_START:
            return {
                ...state,
                isSparepartMLFetching: true
            };
        case catalogue_types.FETCH_SPAREPART_ML_SUCCESS:
            return {
                ...state,
                isSparepartMLFetching: false,
                sparepartMLList: action.payload
            };
        case catalogue_types.FETCH_SPAREPART_ML_FAILURE:
            return {
                ...state,
                isSparepartMLFetching: false,
                errorSparepartMessage: action.payload
            };
            //SPAREPARTS MP
        case catalogue_types.FETCH_SPAREPART_MP_START:
            return {
                ...state,
                isSparepartMPFetching: true
            };
        case catalogue_types.FETCH_SPAREPART_MP_SUCCESS:
            return {
                ...state,
                isSparepartMPFetching: false,
                sparepartMPList: action.payload
            };
        case catalogue_types.FETCH_SPAREPART_MP_FAILURE:
            return {
                ...state,
                isSparepartMPFetching: false,
                errorSparepartMPMessage: action.payload
            };
            //SPAREPARTS GET
        case catalogue_types.FETCH_SPAREPART_GET_START:
            return {
                ...state,
                isSparepartGETFetching: true
            };
        case catalogue_types.FETCH_SPAREPART_GET_SUCCESS:
            return {
                ...state,
                isSparepartGETFetching: false,
                sparepartGETList: action.payload
            };
        case catalogue_types.FETCH_SPAREPART_GET_FAILURE:
            return {
                ...state,
                isSparepartGETFetching: false,
                errorSparepartGETMessage: action.payload
            };
        default:
            return state;
    }
};

export default cataloguetReducer;
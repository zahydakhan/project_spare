import * as Localspare_types from './localspare.types';

const INITIAL_STATE = {
    localspareList: [],
    isLocalspareFetching: false,
    errorLocalspareMessage: undefined
};


const localspareReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //LOCALSPARES Fetch
        case Localspare_types.FETCH_LOCALSPARE_START:
            return {
                ...state,
                isLocalspareFetching: true
            };
        case Localspare_types.FETCH_LOCALSPARE_SUCCESS:
            return {
                ...state,
                isLocalspareFetching: false,
                errorLocalspareMessage: undefined,
                localspareList: action.payload
            };
        case Localspare_types.FETCH_LOCALSPARE_FAILURE:
            return {
                ...state,
                isLocalspareFetching: false,
                errorLocalspareMessage: action.payload
            };
            //LOCALSPARES Add
        case Localspare_types.ADD_LOCALSPARE_START:
            return {
                ...state,
                isLocalspareFetching: true
            };
        case Localspare_types.ADD_LOCALSPARE_FAILURE:
            return {
                ...state,
                isLocalspareFetching: false,
                errorLocalspareMessage: action.payload
            };
            //LOCALSPARES Delete
        case Localspare_types.DEL_LOCALSPARE_START:
            return {
                ...state,
                isLocalspareFetching: true
            };
        case Localspare_types.DEL_LOCALSPARE_FAILURE:
            return {
                ...state,
                isLocalspareFetching: false,
                errorLocalspareMessage: action.payload
            };
            //LOCALSPARES Edit
        case Localspare_types.EDIT_LOCALSPARE_START:
            return {
                ...state,
                isLocalspareFetching: true
            };
        case Localspare_types.EDIT_LOCALSPARE_FAILURE:
            return {
                ...state,
                isLocalspareFetching: false,
                errorLocalspareMessage: action.payload
            };
        default:
            return state;
    }
};

export default localspareReducer;
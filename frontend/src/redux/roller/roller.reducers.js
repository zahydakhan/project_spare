import * as Roller_types from './roller.types';

const INITIAL_STATE = {
    rollerList: [],
    isRollerFetching: false,
    errorRollerMessage: ''
};


const rollerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //ROLLERS Fetch
        case Roller_types.FETCH_ROLLER_START:
            return {
                ...state,
                isRollerFetching: true
            };
        case Roller_types.FETCH_ROLLER_SUCCESS:
            return {
                ...state,
                isRollerFetching: false,
                rollerList: action.payload
            };
        case Roller_types.FETCH_ROLLER_FAILURE:
            return {
                ...state,
                isRollerFetching: false,
                errorRollerMessage: action.payload
            };
            //ROLLERS Add
        case Roller_types.ADD_ROLLER_START:
            return {
                ...state,
                isRollerFetching: true
            };
        case Roller_types.ADD_ROLLER_FAILURE:
            return {
                ...state,
                isRollerFetching: false,
                errorRollerMessage: action.payload
            };
            //ROLLERS Delete
        case Roller_types.DEL_ROLLER_START:
            return {
                ...state,
                isRollerFetching: true
            };
        case Roller_types.DEL_ROLLER_FAILURE:
            return {
                ...state,
                isRollerFetching: false,
                errorRollerMessage: action.payload
            };
            //ROLLERS Edit
        case Roller_types.EDIT_ROLLER_START:
            return {
                ...state,
                isRollerFetching: true
            };
        case Roller_types.EDIT_ROLLER_FAILURE:
            return {
                ...state,
                isRollerFetching: false,
                errorRollerMessage: action.payload
            };
        default:
            return state;
    }
};

export default rollerReducer;
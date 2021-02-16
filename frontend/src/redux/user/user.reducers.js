import * as User_types from './user.types';

const INITIAL_STATE = {
    current_user: [],
    isUserFetching: false,
    errorUserMessage: ''
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //USERS Fetch
        case User_types.FETCH_USER_START:
            return {
                ...state,
                isUserFetching: true
            };
        case User_types.FETCH_USER_SUCCESS:
            return {
                ...state,
                isUserFetching: false,
                current_user: action.payload
            };
        case User_types.FETCH_USER_FAILURE:
            return {
                ...state,
                isUserFetching: false,
                errorUserMessage: action.payload
            };
            //USERS Delete
        case User_types.DEL_USER_START:
            return {
                ...state,
                isUserFetching: false,
                current_user: []
            };

        default:
            return state;
    }
};

export default userReducer;
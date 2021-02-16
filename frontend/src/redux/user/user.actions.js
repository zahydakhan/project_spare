import * as User_types from './user.types';

export const fetchUserStart = (userData) => ({
	type: User_types.FETCH_USER_START,
	payload: userData,
});

export const fetchUserSuccess = (USERList) => ({
	type: User_types.FETCH_USER_SUCCESS,
	payload: USERList,
});

export const fetchUserFailure = (errorMessage) => ({
	type: User_types.FETCH_USER_FAILURE,
	payload: errorMessage,
});


//UserDeletion actions
export const delUserStart = (row) => ({
	type: User_types.DEL_USER_START,
	payload: row,
});

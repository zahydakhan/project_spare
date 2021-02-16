import * as Roller_types from './roller.types';

export const fetchRollerStart = (rollerData) => ({
	type: Roller_types.FETCH_ROLLER_START,
	payload: rollerData,
});

export const fetchRollerSuccess = (ROLLERList) => ({
	type: Roller_types.FETCH_ROLLER_SUCCESS,
	payload: ROLLERList,
});

export const fetchRollerFailure = (errorMessage) => ({
	type: Roller_types.FETCH_ROLLER_FAILURE,
	payload: errorMessage,
});

// Roller Addition Actions
export const addRollerStart = (newData) => ({
	type: Roller_types.ADD_ROLLER_START,
	payload: newData,
});

export const addRollerFailure = (errorMessage) => ({
	type: Roller_types.ADD_ROLLER_FAILURE,
	payload: errorMessage,
});

//state Deletion actions
export const delRollerStart = (row) => ({
	type: Roller_types.DEL_ROLLER_START,
	payload: row,
});

export const delRollerFailure = (errorMessage) => ({
	type: Roller_types.DEL_ROLLER_FAILURE,
	payload: errorMessage,
});

//state Edit actions
export const editRollerStart = (editData) => ({
	type: Roller_types.EDIT_ROLLER_START,
	payload: editData,
});

export const editRollerFailure = (errorMessage) => ({
	type: Roller_types.EDIT_ROLLER_FAILURE,
	payload: errorMessage,
});

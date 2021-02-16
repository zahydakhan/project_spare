import * as Localspare_types from './localspare.types';

export const fetchLocalspareStart = (localData) => ({
	type: Localspare_types.FETCH_LOCALSPARE_START,
	payload: localData,
});

export const fetchLocalspareSuccess = (LOCALSPAREList) => ({
	type: Localspare_types.FETCH_LOCALSPARE_SUCCESS,
	payload: LOCALSPAREList,
});

export const fetchLocalspareFailure = (errorMessage) => ({
	type: Localspare_types.FETCH_LOCALSPARE_FAILURE,
	payload: errorMessage,
});

// Localspare Addition Actions
export const addLocalspareStart = (newData) => ({
	type: Localspare_types.ADD_LOCALSPARE_START,
	payload: newData,
});

export const addLocalspareFailure = (errorMessage) => ({
	type: Localspare_types.ADD_LOCALSPARE_FAILURE,
	payload: errorMessage,
});

//state Deletion actions
export const delLocalspareStart = (row) => ({
	type: Localspare_types.DEL_LOCALSPARE_START,
	payload: row,
});

export const delLocalspareFailure = (errorMessage) => ({
	type: Localspare_types.DEL_LOCALSPARE_FAILURE,
	payload: errorMessage,
});

//state Edit actions
export const editLocalspareStart = (editData) => ({
	type: Localspare_types.EDIT_LOCALSPARE_START,
	payload: editData,
});

export const editLocalspareFailure = (errorMessage) => ({
	type: Localspare_types.EDIT_LOCALSPARE_FAILURE,
	payload: errorMessage,
});

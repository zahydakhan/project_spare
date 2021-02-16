import * as siteOrder_types from './site_order.types';

export const fetchSiteOrderStart = (rollerData) => ({
	type: siteOrder_types.FETCH_SITE_ORDER_START,
	payload: rollerData,
});

export const fetchSiteOrderSuccess = (siteOrderList) => ({
	type: siteOrder_types.FETCH_SITE_ORDER_SUCCESS,
	payload: siteOrderList,
});

export const fetchSiteOrderFailure = (errorMessage) => ({
	type: siteOrder_types.FETCH_SITE_ORDER_FAILURE,
	payload: errorMessage,
});

// SiteOrder Addition Actions
export const addSiteOrderStart = (newData) => ({
	type: siteOrder_types.ADD_SITE_ORDER_START,
	payload: newData,
});

export const addSiteOrderFailure = (errorMessage) => ({
	type: siteOrder_types.ADD_SITE_ORDER_FAILURE,
	payload: errorMessage,
});

//SiteOrder Deletion actions
export const delSiteOrderStart = (row) => ({
	type: siteOrder_types.DEL_SITE_ORDER_START,
	payload: row,
});

export const delSiteOrderFailure = (errorMessage) => ({
	type: siteOrder_types.DEL_SITE_ORDER_FAILURE,
	payload: errorMessage,
});

//SiteOrder Edit actions
export const editSiteOrderStart = (editData) => ({
	type: siteOrder_types.EDIT_SITE_ORDER_START,
	payload: editData,
});

export const editSiteOrderFailure = (errorMessage) => ({
	type: siteOrder_types.EDIT_SITE_ORDER_FAILURE,
	payload: errorMessage,
});

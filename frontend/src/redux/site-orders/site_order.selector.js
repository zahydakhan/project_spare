import { createSelector } from 'reselect';

const selectSiteOrder = state => state.siteOrderReducer


export const selectSiteOrderList = createSelector(
    [selectSiteOrder],
    orderList => orderList.siteOrderList
)
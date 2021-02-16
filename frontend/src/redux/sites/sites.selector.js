import { createSelector } from 'reselect';

const selectSite = state => state.siteReducer


export const selectSiteList = createSelector(
    [selectSite],
    siteList => siteList.siteList
)
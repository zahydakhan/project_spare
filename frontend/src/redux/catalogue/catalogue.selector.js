import { createSelector } from 'reselect';

const selectSparepartCatalogue = state => state.cataloguetReducer

export const selectMLList = createSelector(
    [selectSparepartCatalogue],
    sparepartML => sparepartML.sparepartMLList
)

export const selectMPList = createSelector(
    [selectSparepartCatalogue],
    sparepartMP => sparepartMP.sparepartMPList
)

export const selectGETList = createSelector(
    [selectSparepartCatalogue],
    sparepartGET => sparepartGET.sparepartGETList
)
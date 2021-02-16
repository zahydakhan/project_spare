import { createSelector } from 'reselect';

const selectLocalSpare = state => state.localspareReducer


export const selectLocalspareList = createSelector(
    [selectLocalSpare],
    localList => localList.localspareList
)
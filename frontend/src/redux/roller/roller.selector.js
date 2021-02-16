import { createSelector } from 'reselect';

const selectRoller = state => state.rollerReducer


export const selectRollerList = createSelector(
    [selectRoller],
    rollerList => rollerList.rollerList
)
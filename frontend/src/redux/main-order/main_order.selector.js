import { createSelector } from 'reselect';

const selectMainOrder = state => state.mainOrderReducer


export const selectMainOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.mainOrderList
)

export const selectMonthlyOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.monthlyOrderList
)

export const selectCompleteOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.completeOrderList
)
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

export const dropdownList = createSelector(
    [selectMainOrderList],
    mainOrderList => mainOrderList.data.map((order) => ({site_name: order.site_name, vendor_name: order.vendor_name, month: order.month}))
)
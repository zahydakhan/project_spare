import { createSelector } from 'reselect';

const selectuser = state => state.userReducer


export const selectCurrentUser = createSelector(
    [selectuser],
    userList => userList.current_user.currentUser
)

export const selectToken = createSelector(
    [selectuser],
    userList => userList.current_user.loginInfo
)
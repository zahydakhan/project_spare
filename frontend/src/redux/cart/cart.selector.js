import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) =>
        (accumulatedQuantity + cartItem.quantity), 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) =>
        (accumulatedQuantity + cartItem.quantity * cartItem.price), 0)
);

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.length
);
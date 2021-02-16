import * as Cart_types from './cart.types';


export const addCartItems = (item) => ({
    type: Cart_types.CART_ADD_ITEM,
    payload: item,
});

//state Deletion actions
export const delCartItems = (item) => ({
    type: Cart_types.CART_DEL_ITEM,
    payload: item,
});

//state Edit actions
export const emptyCartItems = (editData) => ({
    type: Cart_types.CART_EMPTY_ITEM,
    payload: editData,
});
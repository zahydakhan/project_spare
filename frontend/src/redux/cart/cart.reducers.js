import * as Cart_types from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    cartItems: [],
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //CART ADD
        case Cart_types.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case Cart_types.CART_DEL_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case Cart_types.CART_EMPTY_ITEM:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};

export default cartReducer;
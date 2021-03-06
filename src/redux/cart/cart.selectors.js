import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)


export const selectCartItemsCount = createSelector(
	[selectCartItems],
	CartItems =>
		CartItems.reduce((accumulate, cartItem) => accumulate + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
	[selectCartItems],
	CartItems =>
		CartItems.reduce((accumulate, {price, quantity}) => accumulate + price*quantity, 0)
)
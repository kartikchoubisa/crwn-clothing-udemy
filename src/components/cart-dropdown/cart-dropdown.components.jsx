import React from 'react';
import CustomButton from "../custom-button/custom-button.components";
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-item">
			<CustomButton>GO TO CHECKOUT</CustomButton>

		</div>
	</div>
)

export default CartDropdown;
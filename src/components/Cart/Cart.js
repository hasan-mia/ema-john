import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
	// total Price & Shipping of Product
	let total = 0;
	let shipping = 0;
	let quantity = 0;
	cart.forEach( product => {
		quantity = quantity + product.quantity;
		total = total + product.price * product.quantity;
		shipping = shipping + product.shipping
		
	});
	// Tax base on total
	let tax = parseFloat((total * 0.1).toFixed(2));
	// Grand Total
	let grandTotal = total + shipping + tax;
	// console.log(tax)

	return (
		<div className="summery mt-5 px-5">
			<h4>Order Summery </h4>
			<p>Selected Iteams: {quantity}</p>
			<p>Total Price: ${total} </p>
			<p>Selected Shipping: ${shipping}</p>
			<p>Tax: ${tax} </p>
			<p>Grand Total: ${grandTotal.toFixed(2)} </p>
		</div>
	);
};

export default Cart;
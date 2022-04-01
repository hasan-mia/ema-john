import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import './Cart.css'

const Cart = () => {
	// Call Product and cart hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);
	
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
		<section className='cart'>
			<div className='container'>
				<div className="row">
					<div className="col-lg-8 col-md-6 col-12">
						<div className="cart-item pt-5">
							<table className='table'>
								<thead>
									<tr className='d-flex justify-content-between'>
										<th className='float-start text-center'>Image</th>
										<th className='w-100'>Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
										<th className='float-end'> <i className="far fa-backspace"></i></th>
									</tr>
								</thead>
								<tbody>
									{
										cart.map(item =>
											<tr className='d-flex align-items-center' id='item'>
												<td className='float-start'> <img className='img-fluid cart-img' src={item.img} alt="Image" /> </td>
												<td className='w-100'>{item.name}</td>
												<td>{item.price}</td>
												<td>{item.quantity}</td>
												<td>{item.price * item.quantity}</td>
												<td className='float-end'> <button className='btn-transparent'><i className="fas fa-trash-alt"></i></button> </td>
											</tr>
										)
									}
									
								</tbody>
							</table>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-12">
						<div className="summery mt-5 px-3">
							<h4 className='text-center text-uppercase fw-bold'>Order Summery </h4>
							<p>Selected Iteams: {quantity}</p>
							<p>Total Price: ${total} </p>
							<p>Selected Shipping: ${shipping}</p>
							<p>Tax: ${tax} </p>
							<p>Grand Total: ${grandTotal.toFixed(2)} </p>

							<div className='row'>
								<Link to='/order' className='btn-dark p-2 text-center rounded fs-5 text-uppercase cursor-pointer fw-bold'>Checkout</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
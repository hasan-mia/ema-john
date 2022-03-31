import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import './Order.css'

const Order = () => {
	// Call Product and cart hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);
	

	return (
		<section className='order'>
			<div className='container'>
				<div className="row">
					<div className="col-lg-8 col-md-6 col-12">
						<h1> {quantity} </h1>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<Cart 
						cart={cart}
						></Cart>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
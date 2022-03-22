import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([])
	useEffect( ()=> {
		fetch('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	}, [])

	const addToCart = (product)=>{
		// console.log(product);
		const updateCart = [...cart, product];
		setCart(updateCart);
	}
	return (
		<div className="container mb-2 mt-4 pt-5">
			<div className="row">
				{/* Main Body */}
				<div className="col-lg-9 col-md-8 col-12">
					<div className="row shop">
						{
							products.map(product => <Product 
								key={product.id}
								product={product}
								addToCart = {addToCart}
							></Product>)
						}
					</div>
				</div>
				{/* Order Summery */}
				<div className="col-lg-3 col-md-4 col-12">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
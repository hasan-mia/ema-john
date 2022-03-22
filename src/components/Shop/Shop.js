import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Shop.css'

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect( ()=> {
		fetch('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	}, [])

	const addToCart = ()=>{
		console.log('addd to cart');
	}
	return (
		<div className="container my-2">
			<div className="row">
				{/* Main Body */}
				<div className="col-lg-9 col-md-8 col-12">
					<div className="row">
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
					<div className="summery">
						<h4>Order Summery</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
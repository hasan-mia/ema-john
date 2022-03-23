import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakedb';
import Cart from '../Cart/Cart';
import Product from './Product';
import './Shop.css';
import '../Pages/Pages.css'

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([])
	// Fetch Data
	useEffect( ()=> {
		fetch('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	}, [])

	// Get Cart from Local Storage
	useEffect( ()=>{
		const storeLocalCart = getStoredCart();
		const savedCart = [];
		// console.log(storeLocalCart);
		for (const id in storeLocalCart) {
			const addedProduct = products.find(product => product.id === id);
			if (addedProduct) {
				const quantity = storeLocalCart[id];
				addedProduct.quantity = quantity + 1;
				savedCart.push(addedProduct);
				// console.log(quantity);
			}
		}
		// Set/Save new cart data in ui
		setCart(savedCart)

	}, [products])

	const addToCart = (selectedProduct)=>{
		// Get Existed Product
		let newUpdateCart = [];
		const existProduct = cart.find(product => product.id === selectedProduct.id);
		if (!existProduct) {
			selectedProduct.quantity = 1;
			newUpdateCart = [...cart, selectedProduct];
			
		}
		else{
		const rest = cart.filter(product => product.id !== selectedProduct.id);
		existProduct.quantity = existProduct.quantity + 1;
			newUpdateCart = [...rest, existProduct];
		}
		// console.log(selectedProduct);
		setCart(newUpdateCart);

		// Add Product into localStorage DB
		addToDb(selectedProduct.id);
		// console.log(addToDb(product));
	}
	
	return (
		<section className="pages">
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
						<Cart 
						cart={cart}
						></Cart>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
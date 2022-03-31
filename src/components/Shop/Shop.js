import React from 'react';
import { addToDb} from '../../Utils/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product';
import './Shop.css';
import '../Pages/Pages.css'
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const Shop = () => {
	// Call Product and Cart Hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	// Handle Cart Button
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
		setCart(newUpdateCart);

		// Add Product into localStorage DB
		addToDb(selectedProduct.id);
	}
	
	return (
		<section className="pages">
			<div className="container mb-2 mt-4 pt-5">
				<div className="row">
					{/* Main Body */}
					<div className="col-12">
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
				</div>
			</div>
		</section>
	);
};

export default Shop;
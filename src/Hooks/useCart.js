import { useEffect, useState } from 'react';
import { getStoredCart } from '../Utils/fakedb';

const useCart = (products) => {
	const [cart, setCart] = useState([]);
	
	// Get Cart from Local Storage
	useEffect(() => {
		const storeLocalCart = getStoredCart();
		const savedCart = [];
		for (const id in storeLocalCart) {
			const getProduct = products.find(product => product.id === id);
			if (getProduct) {
				const quantity = storeLocalCart[id];
				getProduct.quantity = quantity + 1;
				savedCart.push(getProduct);
			}
		}
		// Set/Save new cart data in ui
		setCart(savedCart)

	}, [products])

	return[cart, setCart];
};

export default useCart;
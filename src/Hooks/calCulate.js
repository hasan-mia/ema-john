import useCart from './useCart';
import useProducts from './useProducts';

const calCulate = () => {
	// Call Product and Cart Hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);
	// total Price & Shipping of Product
	let total = 0;
	let shipping = 0;
	let quantity = 0;
	cart.forEach(product => {
		quantity = quantity + product.quantity;
		total = total + product.price * product.quantity;
		shipping = shipping + product.shipping

	});
	// Tax base on total
	let tax = parseFloat((total * 0.1).toFixed(2));
	// Grand Total
	let grandTotal = total + shipping + tax;
	return [quantity, total, shipping, grandTotal];
};

export default calCulate;
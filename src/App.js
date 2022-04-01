// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/Pages/About';
// import Order from './components/Order/Order';
import useProducts from './Hooks/useProducts';
import useCart from './Hooks/useCart';
import { addToDb, deleteShoppingCart, removeFromDb } from './Utils/fakedb';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Contact from './components/Pages/Contact';
import Home from './components/Home';


function App() {
	// Call Product and Cart Hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);
	
	// Remove Item Product
	const removeItem = (item) => {
		const rest = cart.filter(product => product.id !== item.id);
		setCart(rest)
		removeFromDb(item.id);
	}

	// Checkout Cart & Delete Cart Item
	const checkOut = ()=>{
		deleteShoppingCart()
	}
	// Handle Cart Button
	const addToCart = (selectedProduct) => {
		// console.log(selectedProduct);
		// Get Existed Product
		let newUpdateCart = [];
		const existProduct = cart.find(product => product.id === selectedProduct.id);
		if (!existProduct) {
			selectedProduct.quantity = 1;
			newUpdateCart = [...cart, selectedProduct];

		} else if (existProduct) {
			alert('allready added')
			setCart = [...cart];
		} else {
			const rest = cart.filter(product => product.id !== selectedProduct.id);
			existProduct.quantity = existProduct.quantity + 1;
			newUpdateCart = [...rest, existProduct];
		}

		setCart(newUpdateCart);
		// Add Product into localStorage DB
		addToDb(selectedProduct.id);
	}

	
	return(
		<>
			<Router>
			{/* =========Header======= */}
			<Header cart={cart} checkOut={checkOut}></Header>			
				{/* =========All Routes======= */}
				<Routes>
					<Route path='/' element={<Home
						products={products}
						addToCart={addToCart}
						checkOut={checkOut}
						/>}></Route>
					<Route path='/order' element={<Order/>}></Route>
					<Route path='/cart' element={<Cart
						checkOut={checkOut}
						removeItem={removeItem}
						/>}>
					</Route>
					<Route path='/about' element={<About/>}></Route>
					<Route path='/contact' element={<Contact/>}></Route>
				</Routes>
			</Router>

			{/* =========Footer======= */}
			<Footer></Footer>
		</>
	)
}

export default App;

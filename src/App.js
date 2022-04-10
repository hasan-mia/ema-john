// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route, Routes } from "react-router-dom";
import About from './components/Pages/About';
import useProducts from './Hooks/useProducts';
import useCart from './Hooks/useCart';
import { addToDb, deleteShoppingCart, removeFromDb } from './Utils/fakedb';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Contact from './components/Pages/Contact';
import Home from './components/Home';
import Users from './components/Users/Users';
import { createContext } from 'react';
import Login from './components/Users/Login';
import Register from './components/Users/Register';

export const cartContext = createContext()

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
			{/* =========Header======= */}
			<Header cart={cart} checkOut={checkOut}></Header>			
				{/* =========All Routes======= */}
				<Routes>
					<Route path='/' element={<Home
						products={products}
						addToCart={addToCart}
						checkOut={checkOut}
						/>}></Route>
					<Route path='/about' element={<About/>}></Route>
					<Route path='/contact' element={<Contact/>}></Route>

					<Route path='/user' element={<Users/>}></Route>
					<Route path='/login' element={<Login/>}></Route>
					<Route path='/register' element={<Register/>}></Route>
					<Route path='/order' element={<Order/>}></Route>
					<Route path='/cart' element={<Cart
						checkOut={checkOut}
						removeItem={removeItem}
						/>}>
					</Route>
					
				</Routes>
		
			{/* =========Footer======= */}
			<Footer></Footer>
		</>
	)
}

export default App;

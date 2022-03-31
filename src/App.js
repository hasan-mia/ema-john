// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/Pages/About';
// import Order from './components/Order/Order';
import useProducts from './Hooks/useProducts';
import useCart from './Hooks/useCart';
import { addToDb } from './Utils/fakedb';
import Cart from './components/Cart/Cart';


function App() {
	// Call Product and Cart Hook
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	// Handle Cart Button
	const addToCart = (selectedProduct) => {
		// Get Existed Product
		let newUpdateCart = [];
		const existProduct = cart.find(product => product.id === selectedProduct.id);
		if (!existProduct) {
			selectedProduct.quantity = 1;
			newUpdateCart = [...cart, selectedProduct];

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
			<Header cart={cart}></Header>			
				{/* =========All Routes======= */}
				<Routes>
					<Route path='/' element={
						<Shop
						products={products}
						addToCart={addToCart}
						/>
						}>	
					</Route>
					<Route path='/cart' element={<Cart/>}></Route>
					<Route path='/about' element={<About/>}></Route>
				</Routes>
			</Router>

			{/* =========Footer======= */}
			<Footer></Footer>
		</>
	)
}

export default App;

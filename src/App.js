// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/Pages/About';
import Order from './components/Order/Order';

function App() {
	
	return(
		<>
			<Router>
			{/* =========Header======= */}
			<Header></Header>			
				{/* =========All Routes======= */}
				<Routes>
					<Route path='/' element={<Shop/>}></Route>
					<Route path='/order' element={<Order/>}></Route>
					<Route path='/about' element={<About/>}></Route>
				</Routes>
			</Router>

			{/* =========Footer======= */}
			<Footer></Footer>
		</>
	)
}

export default App;

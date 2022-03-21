// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
// import Carousels from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';

function App() {
	return(
		<>
			{/* =========Header======= */}
			<Header></Header>
			<Shop></Shop>
			{/* =========Carousel======= */}
			{/* <Carousels></Carousels> */}
			{/* =========Footer======= */}
			{/* <Footer></Footer> */}
		</>
	)
}

export default App;

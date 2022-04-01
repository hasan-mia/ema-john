import React from 'react';
import Shop from './Shop/Shop';
import Slider from './Slider/Slider';

const Home = ({products, addToCart}) => {
	return (
		<>
			<Slider></Slider>	
			<Shop
			products={products}
			addToCart={addToCart}
			></Shop>
		</>
	);
};

export default Home;
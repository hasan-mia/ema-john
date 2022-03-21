import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Carousel.css'

const Carousels = () => {
	// Controller
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);}
	return (
		// Slider
		<Container fluid>
			<Carousel  activeIndex={index} onSelect={handleSelect} fade>
			<Carousel.Item>
				<img
				className="d-block w-100 img-fluid"
				src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
				alt="First slide"
				/>
				<Carousel.Caption className='text-black'>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100 img-fluid"
				src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
				alt="Second slide"
				/>

				<Carousel.Caption className='text-black'>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100 img-fluid"
				src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
				alt="Third slide"
				/>

				<Carousel.Caption className='text-black'>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
		</Container>
	);
};
export default Carousels;
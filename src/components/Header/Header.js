// import logo from './logo.svg';
import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = ({cart}) => {
	let quantity = 0;
	cart.forEach(product => {
		quantity = quantity + product.quantity;
	});

	return (
		<Navbar bg="dark" fixed="top" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img src="./logo.svg" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll">
					<i className='fas fa-bars text-white'></i>
				</Navbar.Toggle>
				<Navbar.Collapse>
				<Nav className="me-auto my-2 my-lg-0">
					<Link className='nav-link' to="/">Home</Link>
					<Link className='nav-link' to="/cart">Order</Link>
					{/* <Link className='nav-link' href="/inventory">Inventory</Link> */}
					<Link className='nav-link' to="/about">About</Link>
				</Nav>

				<Form className="d-flex w-lg-50">
					<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					/>
					<Button variant="outline-warning bg-white"> <i className='fas fa-search'></i> </Button>
				</Form>

				<Nav className="ms-auto my-2 my-lg-0">
					<Link className='nav-link' to="/user"> <i className='fas fa-user'></i> </Link>
					<Link className='nav-link' to="/wishlist"> <i className='fas fa-heart'></i> </Link>
					<Link className='nav-link' to = "/cart" > <i className ='fas fa-cart-arrow-down' > </i> 
					<span className='position-absolute badge rounded top-0'>
						{quantity}
					</span > 
					</Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
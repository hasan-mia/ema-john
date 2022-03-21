// import logo from './logo.svg';
import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';
const Header = () => {
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#">
					<img src="./logo.svg" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll">
					<i className='fas fa-bars text-white'></i>
				</Navbar.Toggle>
				<Navbar.Collapse>
				<Nav className="me-auto my-2 my-lg-0">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/shop">Shop</Nav.Link>
					<Nav.Link href="/inventory">Inventory</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
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
					<Nav.Link href="/user"> <i className='fas fa-user'></i> </Nav.Link>
					<Nav.Link href="/cart"> <i className='fas fa-heart'></i> </Nav.Link>
					<Nav.Link href="/cart"> <i className='fas fa-cart-arrow-down'></i> </Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Users.css'

const Register = () => {
	return (
		<section className='mt-5 py-5'>
			<Container className='form'>			
			<Row>
				<h2 className='title text-center fw-bold'>Sign Up</h2>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="text" placeholder="First Name" />
				</Col>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="text" placeholder="Last Name" />
				</Col>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="email" placeholder="Email" />
				</Col>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="phone" placeholder="Phone" />
				</Col>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="password" placeholder="Password" />
				</Col>
				<Col md={6} sm={12} className="py-1">
					<Form.Control type="password" placeholder="Confirm Password" />
				</Col>
				<Col md={12} sm={12} className="py-0">
					<p className='ms-3 mt-1 mb-0'>I have any account? <Link className='text-warning' to='/login'>Login</Link> </p>
					<Button variant='warning' className='w-100 m-2 text-white fw-bold fs-5'>Sign Up</Button>
				</Col>
			</Row>
			</Container>
		</section>
	);
};

export default Register;
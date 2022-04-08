import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Register = () => {
	return (			
		<Row>
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
				<Button variant='warning' className='w-100 m-2 text-white fw-bold fs-5'>Register</Button>
			</Col>
		</Row>
	);
};

export default Register;
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const Login = () => {
	return (
		<Col md={12} sm={12}>
			<Form.Control type="email" placeholder="Email" />
			<br/>
			<Form.Control type="password" placeholder="Password" />
			<Button variant='dark' className='w-100 m-2 fw-bold fs-5'>Login</Button>
		</Col>
	);
};

export default Login;
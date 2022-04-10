import React from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Users.css'

const Login = () => {
	return (
		<section className='mt-5 py-5'>
			<Container className='form'>			
				<Row>
					<h2 className='title text-center fw-bold'>Login</h2>
					<Col md={12} sm={12} className="py-1">
						<Form.Control type="email" placeholder="Email" />
					</Col>
					<Col md={12} sm={12} className="py-1">
						<Form.Control type="password" placeholder="Password" />
					</Col>
					<Col md={12} sm={12}>
						<p className='ms-2 mt-1 mb-0'>Need an account? <Link className='text-warning' to='/register'>Register</Link> </p>
						<Button variant='dark' className='w-100 m-2 fw-bold fs-5'>Login</Button>
					</Col>

					<Col lg={12} sm={12}>
						<div class="d-flex justify-content-center mt-0 social-login">
							<li class="fs-2 px-2">
								<a href="#"> <i class="fab fa-google fs-2 text-decoration-none"></i> </a>
							</li>
							<li class="fs-2 px-2">
								<a href="#"> <i class="fab fa-facebook fs-2 text-decoration-none"></i> </a>
							</li>
							<li class="fs-2 px-2">
								<a href="#"> <i class="fab fa-github fs-2 text-decoration-none"></i> </a>
							</li>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Login;
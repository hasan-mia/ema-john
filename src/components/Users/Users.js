import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
// import Register from './Register';
import './Users.css'

const Users = () => {
	return (
		<section className='mt-5 py-5'>
			<Container className='form'>
				<Row>
					{/* <Col lg={12} sm={12}>
						<h2 className='title text-center fw-bold'>Login</h2>
						<div className="form">
							<Login></Login>
						</div>
					</Col> */}
					<Col lg={12} sm={12}>
						<h2 className='title text-center fw-bold'>Register</h2>
						<Register></Register>
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

export default Users;
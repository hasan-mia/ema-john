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
					<Col lg={12} sm={12}>
						<h2 className='title text-center fw-bold'>
							Welcome <br/>
							<p className='fs-1 pt-5'>John Doe</p>
						</h2>
					</Col>

					
				</Row>
			</Container>
		</section>
	);
};

export default Users;
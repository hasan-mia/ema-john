import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<Container fluid className='footer pt-2'>
			<Row className="justify-content-lg-center text-lg-center">
				< p > & copy;
				2022 all right reserved by < a href = 'https://github.com/hasanrafi69'> emaa-john.com </a></p >
				{/* <Col lg={3} md={6} sm={12}>
					<h3>Ours</h3>
				</Col>
				<Col lg={3} md={6} sm={12}>
					<h3>About</h3>
				</Col>
				<Col lg={3} md={6} sm={12}>
					<h3>Contact</h3>
				</Col>
				<Col lg={3} md={6} sm={12}>
					<h3>Get App</h3>
				</Col> */}
				
			</Row>
		</Container>
	);
};

export default Footer;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<Container fluid className='footer pt-2'>
			<Row className="justify-content-lg-center text-center">
				<p>&copy; 2022 all right reserved by <a href='https://github.com/hasanrafi69'>emaa-john.com </a></p>
			</Row>
		</Container>
	);
};

export default Footer;
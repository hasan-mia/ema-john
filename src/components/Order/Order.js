import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'

const Order = () => {
	return (
		<section className='order text-center'>
			<div className='container'>
				<div className="row">
					<div className="col-12">
						<h1 className='fw-bold p-2'> Thanks For Order </h1>
						<Link to='/' className='btn-dark pt-1 pb-2 px-2 rounded text-center fs-2 cursor-pointer'>Back Home</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
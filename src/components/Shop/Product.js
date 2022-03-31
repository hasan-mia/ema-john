import React from 'react';

const Product = (props) => {
	const {addToCart, product} = props;
	const {name, img, category, price, ratings} = product;
	return (
		<div className="col-lg-3 col-md-6 col-12">
			<div className="card py-0 mb-3">
				<img src={img} className="card-img-top h-50 p-1" alt=""/>
					<div className="card-body">
						<h2 className="card-title fw-bold fs-6">{name}</h2>
						<p className="card-text text-justify fs-6">Price: $ {price} </p>
						<p className="card-text text-justify fs-6">Manfacture: {category} </p>
						<p className="card-text text-justify fs-6">Rating: {ratings} <i className="fas fa-star text-warning"></i> </p>
					</div>
						<div className="card-footer d-flex justify-content-center">
						<button onClick={()=> addToCart(product)} className="btn btn-warning text-uppercase"> Add Cart <i className="fas fa-cart-arrow-down fa-x"></i> </button>
					</div>
			</div>
		</div>
	);
};

export default Product;
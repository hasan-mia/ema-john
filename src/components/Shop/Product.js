import React from 'react';

const Product = (props) => {
	console.log(props)
	// const {name, img, category, price, ratings, ratingsCount, seller, shipping, stock } = props.product;
	const {name, img, category, price, ratings} = props.product;
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div class="card px-2 py-0 mb-3">
				<img src={img} className="card-img-top h-50 p-3" alt=""/>
					<div class="card-body">
						<h2 class="card-title fw-bold fs-6">{name}</h2>
						<p class="card-text text-justify fs-6">Price: $ {price} </p>
						<p class="card-text text-justify fs-6">Manfacture: {category} </p>
						<p class="card-text text-justify fs-6">Rating: {ratings} <i class="fas fa-star text-warning"></i> </p>
					</div>
								<div class="card-footer d-flex justify-content-between">
						<button class="btn btn-warning text-uppercase text-center"> View Details </button>
						<button class="btn btn-warning text-uppercase"> <i class="fas fa-cart-arrow-down fa-x"></i> </button>
					</div>
			</div>
		</div>
	);
};

export default Product;
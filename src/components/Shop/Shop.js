import React from 'react';
import Product from './Product';
import './Shop.css';
import '../Pages/Pages.css'

const Shop = ({products, addToCart}) => {
	
	return (
		<section className="shop mt-2">
			<div className="container mb-2">
				<div className="row">
					{/* Main Body */}
					<div className="col-12">
						<div className="row shop">
							{
								products.map(product => <Product 
									key={product.id}
									product={product}
									addToCart = {addToCart}
								></Product>)
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
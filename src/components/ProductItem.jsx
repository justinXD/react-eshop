import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import AddCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
	const [cart, setcart] = useState([])	// asi manejamos eventos en react. dentro del metodo useState va el valor inicial del elemento, en este caso cart
	const handleClick = () => {
		setcart([])
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={AddCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
import React, { useContext } from 'react';
import AppContext from '@context/AppContext.js';
import '@styles/ProductItem.scss';
import AddCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)	// asi manejamos eventos en react. dentro del metodo useState va el valor inicial del elemento, en este caso cart
	const handleClick = (item) => {
		addToCart([item])
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={AddCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
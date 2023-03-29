import React, { useContext } from 'react';
import AppContext from '@context/AppContext.js';
import OrderItem from '../components/OrderItem.jsx';
import '@styles/MyOrder.scss';
import flechita from "@icons/flechita.svg";

const MyOrder = ({toggleOrders, setToggleOrders}) => { 
	const { state } = useContext(AppContext)
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => 
					(<OrderItem product={product} key={`orderItem-${index}`} indexValue={index} />)
				)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				
			</div>
			<div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
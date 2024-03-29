import React, { useState, useContext } from 'react';
import '@styles/Header.scss'
import Menu from "@components/Menu.jsx";
import MyOrder from '@containers/MyOrder.jsx'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@context/AppContext.js';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
    const [toggle, setToggle] = useState(false)	// asi manejamos eventos en react. dentro del metodo useState va el valor inicial del elemento, en este caso cart
    const [toggleOrders, setToggleOrders] = useState(false)
    const { state } =  useContext(AppContext)
	const handleToggle = () => {
		setToggle(!toggle)
	}
    
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />
                        { state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            { toggle ? <Menu /> : <></>}
            { toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/> }
        </nav>
    );
}

export default Header;
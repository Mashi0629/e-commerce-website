
import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart.png'

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="nav-logo">
                <img src={logo} alt="Logo" className="logo-image" />
                <p>Shopper</p>
              </div>
              <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>

              </ul>
                <div className="nav-login-cart">
                    <button>Login</button>
                    <img src={cart_icon} alt="Cart" />
                </div>
        </div>
        
    );
};

export default Navbar;

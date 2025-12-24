
import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart.png'

const Navbar = () => {

  const [menu,setMenu] =  useState("shop");

    return (
        <div className="navbar">
           <div className="nav-logo">
                <img src={logo} alt="Logo" className="logo-image" />
                <p>Shopper</p>
              </div>
              <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to= '/'>Shop</Link>{menu==="shop"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to= '/men'>Men</Link>{menu==="men"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to= '/women'>Women</Link>{menu==="women"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to= '/kids'>Kids</Link> {menu==="kids"? <hr/>:<></>}</li>

              </ul>
                <div className="nav-login-cart">
                    <button>Login</button>
                    <img src={cart_icon} alt="Cart" className="cart-icon" />
                    <div className="nav-cart-count">0</div>
                
                </div>
        </div>
        
    );
};

export default Navbar;

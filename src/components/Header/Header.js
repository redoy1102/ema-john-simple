import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <input className="input" type="text" placeholder="Search"/>
        </div>
    );
};

export default Header;
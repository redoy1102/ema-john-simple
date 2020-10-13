import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <button onClick = {() => setLoggedInUser({})} >Sign out</button>
            </nav>
        </div>
    );
};

export default Header;
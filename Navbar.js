import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo da Confeitaria" className="navbar-logo" />
            <div className="navbar-buttons">
                <button className="navbar-button">Venda</button>
                <button className="navbar-button">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;

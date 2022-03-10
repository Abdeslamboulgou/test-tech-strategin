import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    
    return (<div className="banner">
        <div className="nav_bar">
            <div className='home'><Link style={{ textDecoration: 'none' }} exact to="/" activeClassName='active-nav' >
                Home
            </Link></div>
            <div className='register'><Link style={{ textDecoration: 'none' }} exact to="register" activeClassName='active-nav' >
                Register
            </Link></div>
            <div className='users'><Link style={{ textDecoration: 'none' }} exact to="users" activeClassName='active-nav' >
                Users
            </Link></div>
        </div>
        <img src={logo} alt='strateg in' className='logo'/>
    </div>)
};

export default Header;
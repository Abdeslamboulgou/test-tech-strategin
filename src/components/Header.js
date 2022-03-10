import React from 'react';
import logo from '../assets/logo.jfif';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const titre = "Strategin"
    return (<div className="banner">
        <div className="nav_bar">
            <div className='home'><NavLink style={{ textDecoration: 'none' }} exact to="/" activeClassName='active-nav' >
                Home
            </NavLink></div>
            <div className='register'><NavLink style={{ textDecoration: 'none' }} exact to="register" activeClassName='active-nav' >
                Register
            </NavLink></div>
            <div className='users'><NavLink style={{ textDecoration: 'none' }} exact to="users" activeClassName='active-nav' >
                Users
            </NavLink></div>
        </div>
        <img src={logo} alt='strateg in' className='logo'/>
        <h1 className="title">{titre.toUpperCase()}</h1>
    </div>)
};

export default Header;
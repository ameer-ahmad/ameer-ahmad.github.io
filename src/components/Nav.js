import React, {useState} from 'react';
import logo from '../img/logo.png';
import {Link, useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();

    return (
        <header className="nav-bar" onLoad={console.log(pathname==='/')}>
            <img src={logo} className="logo" />
            <ul className="nav-links">
                <li ><Link to="/" style={pathname === '/' ? {color: '#7f94e0'} : {color: '#c1ccf4'}}>Work</Link></li>
                <li ><Link to="/about" style={pathname === '/about' ? {color: '#7f94e0'} : {color: '#c1ccf4'}}>About</Link></li>
                <li><a href="https://drive.google.com/file/d/1aWRyeenBzEgdz1Y8Er6GscaEx1nn5Tow/view" target="blank">Resume</a></li>
            </ul>
        </header>
    )
}

export default Nav;
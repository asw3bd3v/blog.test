import React from 'react';
import logo from '../../../img/logo.png';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={'header-wrapper'}>
        <div className="container">
            <header className={'header'}>
                <a href=""><img src={logo} alt=""/></a>
                <nav className={'header-menu'}>
                    <ul>
                        <li><NavLink to='app'>Homepage</NavLink></li>
                        <li><NavLink to='about'>About me</NavLink></li>
                        <li><NavLink to='contact'>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="user-navigate">
                    <a href="">Register</a>
                    <a href="">Login</a>
                    <a href="">My profile</a>
                </div>
            </header>
        </div>
        </div>
    )
}

export default Header;

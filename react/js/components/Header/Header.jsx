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
                        <li><NavLink to='/'>Homepage</NavLink></li>
                        <li><NavLink to='/about'>About me</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="user-navigate">
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to={'/login'}>login</NavLink>
                    <NavLink to="/myprofile">My profile</NavLink>
                    <NavLink to="/addpost">Add Post</NavLink>
                </div>
            </header>
        </div>
        </div>
    )
}

export default Header;

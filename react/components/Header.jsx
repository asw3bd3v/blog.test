import React from 'react';
import logoImg from '../img/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <a href="" className="logo"><img src={logoImg} alt=""/></a>
            <nav>
                <a href="">Homepage</a>
                <a href="">About me</a>
                <a href="">Contact</a>
            </nav>
            <div className="login-nav">
                <Link to="/registration">Регистрация</Link>
                <Link to="/login">Логин</Link>
            </div>
        </header>
    );
};

export default Header;

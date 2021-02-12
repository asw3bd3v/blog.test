import React from 'react';
import logoImg from '../img/logo.png';

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
                <a href="">register</a>
                <a href="">login</a>
            </div>
        </header>
    );
};

export default Header;

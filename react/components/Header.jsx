import React, {useEffect} from 'react';
import logoImg from '../img/logo.png';
import {Link} from "react-router-dom";
import {getCookie} from "../utils/cookie";
import {fetchPosts} from "../redux/actions/postAction";

const Header = ({token}) => {
    console.log(token)
    return (
        <header className={'header'}>
            <a href="" className="logo"><img src={logoImg} alt=""/></a>
            <nav>
                <a href="">Homepage</a>
                <a href="">About me</a>
                <a href="">Contact</a>
            </nav>
            {token ?
                <div className="login-nav">
                    <Link to="/">Профиль</Link>
                    <Link to="/">Выход</Link>
                </div>
                :
                <div className="login-nav">
                    <Link to="/registration">Регистрация</Link>
                    <Link to="/login">Логин</Link>
                </div>
            }


        </header>
    );
};

export default Header;

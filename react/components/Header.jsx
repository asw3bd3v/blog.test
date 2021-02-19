import React, {useEffect} from 'react';
import logoImg from '../img/logo.png';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Header = ({token, logout}) => {
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(logout());
    }
    return (
        <header className={'header'}>
            <Link to="/" className="logo"><img src={logoImg} alt=""/></Link>
            <nav>
                <Link to="/">Homepage</Link>
                <a href="">About me</a>
                <a href="">Contact</a>
            </nav>
            {token ?
                <div className="login-nav">
                    <Link to="/create_post">Создать пост</Link>
                    <Link to="/">Профиль</Link>
                    <Link to="/" onClick={logoutUser}>Выход</Link>
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

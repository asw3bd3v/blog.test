import axios from 'axios';
import {deleteCookie, getCookie} from "../../utils/cookie";
export const loginAuth = (data) => (dispatch) => {
    axios.post(`api/login`, data)
        .then(response => {
            //console.log(response)
            let date = new Date(Date.now() + 86400e3); // Установка времени занчени cookie на 1 день == 86400e3
            date = date.toUTCString();
            document.cookie = `isLogin=true; expires=${date}`;
            document.cookie = `token=${response.data.data.api_token}; expires=${date}`;
            dispatch(setLogin(response.data.data))
        })
}

export const registration = (data) => (dispatch) =>{
    axios.post(`api/register`, data)
        .then(response => {
            let date = new Date(Date.now() + 86400e4); // Установка времени занчени cookie на 1 день == 86400e3
            date = date.toUTCString();
            document.cookie = `isLogin=true; expires=${date}`;
            document.cookie = `token=${response.data.data.api_token}; expires=${date}`;
            dispatch(setLogin(response.data.data))
        })
}

export const logout = () => (dispatch) =>{
    axios.post(`api/logout`, {}, {headers: {'Authorization': 'Bearer ' + getCookie('token')}})
        .then(response => {
            console.log(response)
            deleteCookie("token")
            dispatch(deleteLogin())
        })
}
export const deleteLogin = () => ({
    type: 'DELETE_USER_DATA',
})
export const setLogin = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData
})
export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
})

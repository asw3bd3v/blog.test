import axios from 'axios';
export const loginAuth = (data) => (dispatch) => {
    axios.post(`api/login`, data)
        .then(response => {
            //console.log(response)
            let date = new Date(Date.now() + 86400e3); // Установка времени занчени cookie на 1 день
            date = date.toUTCString();
            document.cookie = `isLogin=true; expires=${date}`;
            document.cookie = `token=${response.data.data.api_token}; expires=${date}`;
            dispatch(setLogin(response.data.data))
        })
}

export const registration = (data) => {
    axios.post(`api/register`, data)
        .then(response => {
            console.log(response)
        })
}

export const setLogin = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData
})

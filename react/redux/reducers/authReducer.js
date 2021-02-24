import {getCookie} from "../../utils/cookie";

let token = getCookie('token');

const initialState = {
    userData: {
        name: "test",
        login: 'test',
        email: 'test@gmail.com',
        id: 1,
        api_token: getCookie('token'),
        avatar: '',
    }
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload
            }
        case 'SET_TOKEN':
            return{
                ...state,
                api_token: action.payload
            }
        case 'DELETE_USER_DATA':
            return {
                ...initialState
            }
        default:
            return {
                ...state
            }
    }
}

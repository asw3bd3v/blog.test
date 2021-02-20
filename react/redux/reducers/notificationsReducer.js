import {getCookie} from "../../utils/cookie";

let token = getCookie('token');

const initialState = {
    notifications: {
        createPost: false,
    }
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATAa':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

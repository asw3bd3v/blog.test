const IS_AUTH = 'IS_AUTH';
let initialState = {
    isAuth: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                ...action.isAuth,
            }
        default:
            return state;
    }
}

export const setIsAuth = (isAuth) => ({
    type: IS_AUTH,
    isAuth
})

export default authReducer;

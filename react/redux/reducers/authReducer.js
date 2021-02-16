const initialState = {
    userData: {
        name: "test",
        login: 'test',
        id: 1,
    }
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
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

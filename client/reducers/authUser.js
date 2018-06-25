import {
    LOGIN_USER,
    LOGOUT_USER
} from '../constatns/actionTypes'

const initialState = {
    isAuth: true,
    user: {}
}

export default function authUser(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case LOGIN_USER:
            return {
                isAuth: true,
                user: { payload }
            }

        case LOGOUT_USER:
            return initialState

        default: return state
    }
}
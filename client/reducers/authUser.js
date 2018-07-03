import {
    LOGIN_USER,
    UPDATE_USER
} from '../constatns/actionTypes'

const initialState = {
    isAuth: false,
    user: {}
}

export default function authUser(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case LOGIN_USER:
            return {
                isAuth: true,
                user: payload
            }

        case UPDATE_USER:
            return {
                isAuth: true,
                user: payload
            }

        default: return state
    }
}
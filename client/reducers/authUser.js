import {
    LOGIN_USER,
    UPDATE_CURRENT_USER
} from '../constatns/action.constants'

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

        case UPDATE_CURRENT_USER:
            return {
                isAuth: true,
                user: payload
            }

        default: return state
    }
}
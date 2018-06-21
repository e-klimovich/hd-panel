import {
    FETCH_USERS
} from './../constatns/actionTypes'

const initialState = []

export default function users(state = initialState, action) {
    const  { type, payload } = action

    switch(type) {
        case FETCH_USERS:
            return payload

        default: return state
    }
}
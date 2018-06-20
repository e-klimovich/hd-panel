import {
    FETCH_NOTIES,
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE
} from './../constatns/actionTypes'

const initialState = []

export default function noties(state = initialState, action) {
    const  { type, payload } = action

    switch(type) {
        case FETCH_NOTIES:
            return payload

        case ADD_NOTE:
            return [
                ...state,
                payload
            ]

        case DELETE_NOTE:
            return state.filter(item => {
                return item._id !== payload
            })

        case UPDATE_NOTE:
            return state

        default: return state
    }
}
//import without from 'lodash/without'

import {
    ADD_NOTE,
    // DELETE_NOTE,
    // EDITE_NOTE
} from './../constatns/actionTypes'

const initialState = []

export default function noties(state = initialState, action) {
    const  { type, payload } = action

    switch(type) {
        case ADD_NOTE:
            return [...state, payload]

        default: return state
    }
}
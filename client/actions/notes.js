import axios from 'axios'
import { toast } from 'react-toastify'

import { TOAST_SETTINGS } from './../constatns/settings'

import {
    FETCH_NOTIES,
    ADD_NOTE,
    DELETE_NOTE
} from './../constatns/actionTypes'

export const fetchNoties = (dispatch) => {
    return axios.get('/api/get-noties')
        .then(({data}) => {
            dispatch({
                type: FETCH_NOTIES,
                payload: data.docs
            })
        })
        .catch((err) => {
            toast('Fetching notes data error', TOAST_SETTINGS)
            console.log(err)
        })
}

export const addNote = payload => dispatch => {
    dispatch({
        type: ADD_NOTE,
        payload
    })
}

export const deleteNote = (dispatch, payload) => {
    return dispatch({
        type: DELETE_NOTE,
        payload
    })
}
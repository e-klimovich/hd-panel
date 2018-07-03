import axios from 'axios'
import { toast } from 'react-toastify'

import { TOAST_SETTINGS } from './../constatns/settings.constants'

import {
    FETCH_NOTIES,
    ADD_NOTE,
    DELETE_NOTE
} from './../constatns/action.constants'

export const fetchNotes = (dispatch) => {
    return axios.post('/api/get-notes', {data: 'admin'})
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

export const addNote = (dispatch, payload) => {
    return axios.post('/api/add-note', payload)
            .then(({data}) => {
                dispatch({
                    type: ADD_NOTE,
                    payload: data.note
                })
                toast('Note was created', TOAST_SETTINGS)
            })
    
}

export const deleteNote = (dispatch, payload) => {
    axios.post('/api/delete-note', payload)
            .then(({data}) => {
                dispatch({
                    type: DELETE_NOTE,
                    payload: data._id
                })
                toast('Note was deleted', TOAST_SETTINGS)
            })
}

export const updateNote = (dispatch, payload) => {
    axios.post('/api/update-note', payload)
            .then(({data}) => {
                dispatch({
                    type: DELETE_NOTE,
                    payload: data.doc
                })
                toast('Note was updated', TOAST_SETTINGS)
            })
}
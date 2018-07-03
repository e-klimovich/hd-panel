import axios from 'axios'
import { toast } from 'react-toastify'
import { push } from 'react-router-redux'

import { TOAST_SETTINGS } from './../constatns/settings'

import {
    LOGIN_USER,
    UPDATE_USER
} from './../constatns/actionTypes'

export const loginUser = (dispatch, payload) => {
    return axios.post('/api/login', payload)
            .then(({data}) => {
                if(data.status) {
                    dispatch({
                        type: LOGIN_USER,
                        payload: data.user
                    })
                    dispatch(push('/'))
                } else {
                    toast('Incorrect login or password', TOAST_SETTINGS)
                }
            })
    
}

export const updateUser = (dispatch, payload) => {
    return axios.post('/api/update-profile', payload)
            .then(({data}) => {
                if(data.status) {
                    dispatch({
                        type: UPDATE_USER,
                        payload: data.user
                    })
                } else {
                    toast('User profile updated', data.message)
                }
            })
    
}
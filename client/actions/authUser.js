import axios from 'axios'
import { toast } from 'react-toastify'
import { push } from 'react-router-redux'

import { TOAST_SETTINGS } from './../constatns/settings.constants'

import {
    LOGIN_USER,
    UPDATE_CURRENT_USER
} from './../constatns/action.constants'

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
                        type: UPDATE_CURRENT_USER,
                        payload: data.user
                    })
                }

                toast(data.message, TOAST_SETTINGS)
            })
    
}
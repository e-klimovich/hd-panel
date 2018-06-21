import axios from 'axios'
import { toast } from 'react-toastify'

import { TOAST_SETTINGS } from './../constatns/settings'

import { FETCH_USERS } from './../constatns/actionTypes'

export const fetchUsers = (dispatch) => {
    return axios.get('/api/get-users')
        .then(({data}) => {
            dispatch({
                type: FETCH_USERS,
                payload: data.docs
            })
        })
        .catch((err) => {
            toast('Fetching users data error', TOAST_SETTINGS)
            console.log(err)
        })
}
import axios from 'axios'
import { toast } from 'react-toastify'

import { TOAST_SETTINGS } from './../constatns/settings.constants'

import { FETCH_USERS } from './../constatns/action.constants'

export const fetchUsers = (dispatch) => {
    return axios.post('/api/get-users')
        .then(({data}) => {
            dispatch({
                type: FETCH_USERS,  
                payload: data.users
            })
        })
        .catch((err) => {
            toast('Fetching users data error', TOAST_SETTINGS)
            console.log(err)
        })
}
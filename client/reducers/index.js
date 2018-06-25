import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import users from './users'
import noties from './notes'
import authUser from './authUser'

const rootReducer = combineReducers({
    router: routerReducer,
    authUser,
    users,
    noties
})

export default rootReducer
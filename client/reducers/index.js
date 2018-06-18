import { combineReducers } from 'redux'

import currentUser from './user/currentUser'
import users from './user/users'
import noties from './note/noties'

const rootReducer = combineReducers({
    currentUser,
    users,
    noties
})

export default rootReducer
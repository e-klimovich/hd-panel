import { combineReducers } from 'redux'

import currentUser from './currentUser'
import users from './users'
import noties from './noties'

const rootReducer = combineReducers({
    currentUser,
    users,
    noties
})

export default rootReducer
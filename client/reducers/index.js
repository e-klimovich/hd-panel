import { combineReducers } from 'redux'

import users from './users'
import noties from './noties'

const rootReducer = combineReducers({
    users,
    noties
})

export default rootReducer
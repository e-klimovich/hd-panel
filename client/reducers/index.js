import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import users from './users'
import noties from './notes'

const rootReducer = combineReducers({
    routing: routerReducer,
    users,
    noties
})

export default rootReducer
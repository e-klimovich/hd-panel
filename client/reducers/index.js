import { combineReducers } from 'redux'
import currentUser from './user/currentUser'
import avaliableNoties from './note/avaliableNoties'

export default combineReducers({
    currentUser,
    avaliableNoties
})
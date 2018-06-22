import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './base.scss'
import rootReducer from './reducers/index'

import Dashboard from './containers/Dashboard'
import Register from './containers/Register'
import Login from './containers/Login'
import UserProfile from './containers/UserProfile'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route exact path='/' component={Dashboard} />
                <Route path='/dashboard/:id' component={UserProfile}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))
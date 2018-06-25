import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import './base.scss'
import rootReducer from './reducers/index'

import Home from './containers/decorators/home.decorator'
import Register from './containers/Register'
import Login from './containers/Login'
import Notes from './containers/Notes'

const history = createHistory()

const middlewares = [
    routerMiddleware(history)
]

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Home>
                    <Route exact path='/' component={Notes} />
                    <Route path='/edit-profile' component={Notes} />
                </Home>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('app'))
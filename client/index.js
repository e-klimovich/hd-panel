import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import './base.scss'
import rootReducer from './reducers/index'

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

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} 
        render={props => 
            store.getState().authUser.length 
                ? <Component {...props} />
                : <Redirect from={props.loction} to='/login' />
        } />
)

render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <PrivateRoute exact path='/' component={Notes} />
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('app'))
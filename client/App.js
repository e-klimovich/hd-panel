import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard'
import Register from './containers/Register'
import Login from './containers/Login'
import UserProfile from './containers/UserProfile'

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/profile/:id' component={UserProfile}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
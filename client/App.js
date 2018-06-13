import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import Register from './pages/Register'
import Login from './pages/Login'


class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Register} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
            </Switch>
        )
    }
}

export default hot(module)(App)
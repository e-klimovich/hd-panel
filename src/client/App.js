import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn'


class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={SignIn} />
            </Switch>
        )
    }
}

export default hot(module)(App)
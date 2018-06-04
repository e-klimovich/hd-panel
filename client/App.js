import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp'


class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={SignUp} />
                <Route path='/signup' component={SignUp} />
            </Switch>
        )
    }
}

export default hot(module)(App)
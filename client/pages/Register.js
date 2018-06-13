import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Page from './decorators/page.decorator'
import RegisterForm from '../components/forms/RegisterForm'

class Register extends Component {
    render() {
        return (
            <Page>
                <RegisterForm />
            </Page>
        )
    }
}

export default hot(module)(Register)



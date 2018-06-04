import React, { Component } from 'react'

import Page from './decorators/page.decorator'
import RegisterForm from '../components/forms/RegisterForm'

export default class SignIn extends Component {
    render() {
        return (
            <Page>
                <RegisterForm />
            </Page>
        )
    }
}



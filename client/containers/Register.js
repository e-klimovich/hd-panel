import React, { Component } from 'react'

import Page from './decorators/page.decorator'
import RegisterForm from '../components/forms/RegisterForm'

export default class Register extends Component {
    render() {
        return (
            <Page>
                <RegisterForm />
            </Page>
        )
    }
}
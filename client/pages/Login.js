import React, { Component } from 'react'

import Page from './decorators/page.decorator'
import Loginform from '../components/forms/Loginform'

export default class SignIn extends Component {
    render() {
        return (
            <Page>
                <Loginform />
            </Page>
        )
    }
}
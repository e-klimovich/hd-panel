import React, { Component } from 'react'
import axios from 'axios'
import serialize from 'form-serialize'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import Page from './decorators/page.decorator'
import Card from './decorators/card.decorator'
import Form from './../components/forms/Form'

import { TOAST_SETTINGS, LOGIN_FORM_SCHEME } from '../constatns/settings'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.formSubminHandler = this.formSubminHandler.bind(this)
    }

    formSubminHandler(e) {
        e.preventDefault()

        const data = serialize(e.target, {hash: true})

        axios.post('/api/login', data)
            .then(res => {
                if(res.data.user) {
                    // TODO: Need more research. I don't like this solution
                    location.reload()
                } else {
                    toast('Incorrect login or password', TOAST_SETTINGS)
                }
            })
    }

    render() {
        return (
            <Page>
                <Card>
                    <h2>User Sign In</h2>
                    <Form formScheme={LOGIN_FORM_SCHEME} btnName='Login' onSubmit={this.formSubminHandler} />
                    <div className='form-separator'>or</div>
                    <Link to='/register'>Register New User</Link>
                </Card>
            </Page>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'
import serialize from 'form-serialize'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import Page from './decorators/page.decorator'
import Card from './decorators/card.decorator'
import Form from './../components/forms/Form'

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
                    toast('Incorrect login or password', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 3000
                    })
                }
            })
    }

    render() {
        const formScheme = [
            {
                schemeType: 'input',
                name: 'username',
                placeholder: 'Username',
                required: true
            },
            {
                schemeType: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true
            }
        ]

        return (
            <Page>
                <Card>
                    <h2>User Sign In</h2>
                    <Form formScheme={formScheme} btnName='Login' onSubmit={this.formSubminHandler} />
                    <div className='form-separator'>or</div>
                    <Link to='/register'>Register New User</Link>
                </Card>
            </Page>
        )
    }
}
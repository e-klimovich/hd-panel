import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './decorators/page.decorator'
import Card from './decorators/card.decorator'
import Button from './../components/Button'
import Input from './../components/Input'

export default class Register extends Component {
    render() {
        return (
            <Page>
                <Card>
                    <h2>Sign Up Form</h2>
                    <form method='post' action='/api/register' className='single-form'>
                        <Input name='username' required placeholder='User Name' />
                        <Input name='email' required placeholder='Email' />
                        <Input type='password' required name='password' placeholder='Password' />
                        <Button type='submit' text='Register Now' />
                    </form>
                    <div className='form-separator'>or</div>
                    <Link to='/login'>Try to Login</Link>
                </Card>
            </Page>
        )
    }
}
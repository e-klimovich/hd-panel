import React, { Component } from 'react'

import Card from '../../components/card/Card'
import Input from '../inputs/Input'
import Button from '../../components/button/Button'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <form method='post' action='/register' className='single-form'>
                    <h2>Sign Up Form</h2>
                    <Input name='username' placeholder='User Name' />
                    <Input name='email' placeholder='Email' />
                    <Input type='password' name='password' placeholder='Password' />
                    <Button type='submit' text='Register Now' />
                </form>
            </Card>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../pages/decorators/card.decorator'
import Input from '../Input'
import Button from '../Button'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                <form method='post' action='/login' className='single-form'>
                    <h2>User Sign In</h2>
                    <Input name='username' placeholder='User Name' />
                    <Input type='password' name='password' placeholder='Password' />
                    <Button type='submit' text='Sign In' />
                    <div className='form-separator'>or</div>
                    <Link to='/register'>Register New User</Link>
                </form>
            </Card>
        )
    }
}

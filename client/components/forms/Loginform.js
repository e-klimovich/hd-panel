import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from '../Card'
import Input from '../Input'
import Button from '../Button'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <form method='post' action='/login'>
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

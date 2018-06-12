import React, { Component } from 'react'

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

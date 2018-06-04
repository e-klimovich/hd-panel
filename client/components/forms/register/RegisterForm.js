import React, { Component } from 'react'

import Card from '../../../components/card/Crad'
import Input from '../../inputs/Input'
import Button from '../../../components/button/Button'

import './registerform.scss'


export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }
    
    hendleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Card>
                <form className='register-form' onSubmit={this.hendleSubmit}>
                    <h2>Register Form</h2>
                    <Input name='username' placeholder='User Name' />
                    <Input name='email' placeholder='Email' />
                    <Input type='password' name='password' placeholder='Password' />
                    <Button type='submit' text='Register Now' />
                </form>
            </Card>
        )
    }
}

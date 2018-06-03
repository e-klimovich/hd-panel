import React, { Component } from 'react'

import Card from '../../../components/card/Crad'
import Input from '../../inputs/Input'
import Button from '../../../components/button/Button'


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
                <h2>Register Form</h2>
                <form onSubmit={this.hendleSubmit}>
                    <Input name='username' />
                    <Input name='email' />
                    <Input type='password' name='password' />
                    <Button type='submit' text='Register Now' />
                </form>
            </Card>
        )
    }
}

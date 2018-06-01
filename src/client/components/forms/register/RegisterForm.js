import React, { Component } from 'react'

import Input from '../../inputs/Input'


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
            <form onSubmit={this.hendleSubmit}>
                <Input name='username' />
                <Input name='email' />
                <Input type='password' name='password' />
            </form>
        )
    }
}

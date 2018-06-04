import React, { Component } from 'react'
import axios from 'axios'

import Card from '../../components/card/Crad'
import Input from '../inputs/Input'
import Button from '../../components/button/Button'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }
    
    hendleSubmit(event) {
        event.preventDefault();

        let data = new FormData(event.target);
        
        axios.post('/api/login', data)
            .then(res => {
                if(!res.data.err) {
                    alert('Response has no errors')
                }
            })
    }

    render() {
        return (
            <Card>
                <form className='single-form' onSubmit={this.hendleSubmit}>
                    <h2>User Sign In</h2>
                    <Input name='username' placeholder='User Name' />
                    <Input type='password' name='password' placeholder='Password' />
                    <Button type='submit' text='Sign In' />
                </form>
            </Card>
        )
    }
}

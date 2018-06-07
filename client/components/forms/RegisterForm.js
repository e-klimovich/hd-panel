import React, { Component } from 'react'
import axios from 'axios'
import serialize from 'form-serialize'

import Card from '../../components/card/Card'
import Input from '../inputs/Input'
import Button from '../../components/button/Button'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }
    
    hendleSubmit(event) {
        event.preventDefault();

        let data = serialize(event.target);
        
        axios.post('/api/register', data)
            .then(res => {
                if(res.data.err)
                    alert(`Error ${res.data.err}: Go to hell. Something get wrong but i do not whant to check`)
                else 
                    window.location = `/profile/${res.data.userid}`
            })
    }

    render() {
        return (
            <Card>
                <form className='single-form' onSubmit={this.hendleSubmit}>
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

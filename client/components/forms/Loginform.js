import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import serialize from 'form-serialize'
import { toast } from 'react-toastify'

import Card from '../../pages/decorators/card.decorator'
import Input from '../Input'
import Button from '../Button'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.formSubminHandler = this.formSubminHandler.bind(this)
    }

    formSubminHandler(e) {
        e.preventDefault()

        let data = serialize(e.target, {hash: true})

        axios.post('/api/login', data)
            .then(res => {
                if(res.data.user) {
                    console.log('Loggined User', res.data.user)
                    location.reload()
                } else {
                    toast('Incorrect login or password', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 3000
                    })
                }
            })
    }

    render() {
        return (
            <Card>
                <form onSubmit={this.formSubminHandler}>
                    <h2>User Sign In</h2>
                    <Input name='username' required placeholder='User Name'/>
                    <Input type='password' required name='password' placeholder='Password' />
                    <Button type='submit' text='Sign In' />
                    <div className='form-separator'>or</div>
                    <Link to='/register'>Register New User</Link>
                </form>
            </Card>
        )
    }
}

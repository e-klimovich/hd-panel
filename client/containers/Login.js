import React, { Component } from 'react'
import serialize from 'form-serialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Page from './decorators/page.decorator'
import Card from './decorators/card.decorator'
import Form from './../components/Form'

import * as userAuthActions from './../actions/authUser'
import { LOGIN_FORM_SCHEME } from '../constatns/settings.constants'

class Login extends Component {
    onloginUser(e) {
        e.preventDefault()
        
        const data = serialize(e.target, {hash: true})

        this.props.loginUser(data)
    }

    render() {
        return (
            <Page>
                <Card>
                    <h2>User Sign In</h2>
                    <Form formScheme={LOGIN_FORM_SCHEME} btnName='Login' onSubmit={this.onloginUser.bind(this)} />
                    <div className='form-separator'>or</div>
                    <Link to='/register'>Register New User</Link>
                </Card>
            </Page>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (payload) => userAuthActions.loginUser(dispatch, payload)
})

export default connect(
    null,
    mapDispatchToProps
)(Login)
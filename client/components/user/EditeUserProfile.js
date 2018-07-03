import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import serialize from 'form-serialize'

import Card from './../../containers/decorators/card.decorator'
import Input from './../Input'
import Button from './../Button'

import * as userAuthActions from './../../actions/authUser'

const EditeProfileForm = styled.form`
    width: 100%;
    text-align: right;
`

class EditeUserProfile extends Component {
    constructor(props) {
        super(props)
    }

    onUpdateUser(e) {
        e.preventDefault()

        let data = serialize(e.target, {hash: true})

        data._id = this.props.editeProfile._id
        this.props.updateUser(data)
    }

    render() {
        const { username, email } = this.props.editeProfile

        return (
            <Card>
                <EditeProfileForm onSubmit={this.onUpdateUser.bind(this)}>
                    <Input type='text' placeholder='Username' defaultValue={username} name='username' required={true} />
                    <Input type='text' placeholder='Email' defaultValue={email} name='email' required={true} />
                    <Button text='Save'/>
                </EditeProfileForm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const id = state.router.location.pathname.split('dashboard/')[1] || state.authUser.user._id
    const userlist = [...state.users, state.authUser.user]
    
    let editedUser = {}

    userlist.map((itm) => {
        itm._id === id
            ? editedUser = itm
            : null
    })

    return ({
        editeProfile: editedUser
    })
}

const mapDaspatchToProps = (dispatch) => ({
    updateUser: payload => userAuthActions.updateUser(dispatch, payload)
})

export default connect(
    mapStateToProps,
    mapDaspatchToProps
)(EditeUserProfile)
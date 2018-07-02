import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Card from './../../containers/decorators/card.decorator'
import Input from './../Input'
import Button from './../Button'

const EditeProfileForm = styled.form`
    width: 100%;
    text-align: right;
`

class EditeUserProfile extends Component {
    constructor(props) {
        super(props)
    }

    onSaveUser(e) {
        e.preventDefault()

        console.log('User id for save', this.props.userID)
    }

    render() {
        return (
            <Card>
                <EditeProfileForm onSubmit={this.onSaveUser.bind(this)}>
                    <Input type='text' placeholder='Username' name='username' required={true} />
                    <Input type='text' placeholder='Email' name='email' required={true} />
                    <Button text='Save'/>
                </EditeProfileForm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    userID: state.authUser.user._id
})

export default connect(
    mapStateToProps,
    null
)(EditeUserProfile)
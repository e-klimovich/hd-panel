import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Wrapper from './decorators/home.decorator'
import EditeUserProfile from './../components/user/EditeUserProfile'

class EditeProfile extends Component {
    render() {
        return (
            <Wrapper>
                <EditeUserProfile />
            </Wrapper>
        )
    }
}

export default hot(module)(EditeProfile)
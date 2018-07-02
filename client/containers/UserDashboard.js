import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Wrapper from './decorators/home.decorator'
import UserDashboardForAdmin from './../components/user/UserDashboadForAdmin'

class UserDashboard extends Component {
    render() {
        return (
            <Wrapper>
                <UserDashboardForAdmin />
            </Wrapper>
        )
    }
}

export default hot(module)(UserDashboard)
import React, { Component } from 'react'
// import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import Wrapper from './decorators/home.decorator'
import NoteList from './../components/note/NoteList'
import EditeUserProfile from './../components/user/EditeUserProfile'

const PageInner = styled.div`
    display: flex;
    align-items: flex-start;

    & > * {
        width: 50%;
    }
`

class UserDashboard extends Component {
    render() {
        return (
            <Wrapper>
                <PageInner>
                    <NoteList />
                    <EditeUserProfile />
                </PageInner>
            </Wrapper>
        )
    }
}

export default UserDashboard
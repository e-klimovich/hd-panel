import React, { Component } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'

import NoteList from './../components/note/NoteList'

import Wrapper from './decorators/home.decorator'

const NoteForm = styled.div`
    form {
        width: 100%;
        text-align: right;
    }
`

class Dashboard extends Component {
    render() {
        return (
            <Wrapper>
                <NoteForm>
                    <NoteList />
                </NoteForm>
            </Wrapper>
        )
    }
}

export default hot(module)(Dashboard)
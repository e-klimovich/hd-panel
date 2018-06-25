import React, { Component } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'

import NoteList from './../components/note/NoteList'

const NoteForm = styled.div`
    form {
        width: 100%;
        text-align: right;
    }
`

class Dashboard extends Component {
    render() {
        return (
            <NoteForm>
                <NoteList />
            </NoteForm>
        )
    }
}

export default hot(module)(Dashboard)
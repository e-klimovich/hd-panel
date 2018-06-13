import React, { Component } from 'react'
import styled from 'styled-components'
import serialize from 'form-serialize'
import axios from 'axios'
import { hot } from 'react-hot-loader'

import Page from './decorators/page.decorator'
import Sidebar from './../components/sidebar/Sidebar'
import Card from './decorators/card.decorator'
import Input from './../components/Input'
import Textarea from './../components/Textarea'
import Button from './../components/Button'
import NoteItem from '../components/Note'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ContentWrapper = styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    padding: 15px 0;
    overflow-x: hidden;
    overflow-y: auto;
`

const NoteForm = styled.form`
    width: 100%;
    text-align: right;
`

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            noteList: []
        }

        this.onNoteSubmitHandler = this.onNoteSubmitHandler.bind(this)
    }

    onNoteSubmitHandler(e) {
        e.preventDefault()

        let data = serialize(e.target, {hash: true})

        axios.post('/add-note', data)
            .then(res => {
                toast(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 3000
                })

                this.getNoteList()
            })
    }

    getNoteList() {
        axios.post('/note-list')
            .then(res => {
                this.setState({
                    noteList: res.data.noteList
                })
            })
    }

    componentDidMount() {
        this.getNoteList()
    }

    render() {
        const noteItemList = this.state.noteList.length
            ? this.state.noteList.map((itm, idx) => <NoteItem key={idx} data={itm}/>)
            : <Card>There are no results yet</Card>

        return (
            <Page>
                <Sidebar />
                <ContentWrapper>
                    {noteItemList}

                    <Card>
                        <NoteForm action='/add-note' method='post' onSubmit={this.onNoteSubmitHandler}>
                            <Input name='title' placeholder='Note Title' required />
                            <Textarea name='content' placeholder='Note Content...' required />
                            <Button type='submit' text='Save Note' />
                        </NoteForm>
                    </Card>

                </ContentWrapper>

                <ToastContainer />
            </Page>
        )
    }
}

export default /*hot(module)(Dashboard)*/ Dashboard
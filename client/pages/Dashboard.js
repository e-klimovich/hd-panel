import React, { Component } from 'react'
import styled from 'styled-components'
import serialize from 'form-serialize'
import axios from 'axios'

import Page from './decorators/page.decorator'
import Sidebar from './../components/sidebar/Sidebar'
import Card from './../components/Card'
import Input from './../components/Input'
import Textarea from './../components/Textarea'
import Button from './../components/Button'
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
`

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noteList: {}
        }

        this.onNoteSubmitHandler = this.onNoteSubmitHandler.bind(this)
        this.getNoteList = this.getNoteList.bind(this)
    }

    onNoteSubmitHandler(e) {
        e.preventDefault()

        let data = serialize(e.target, {hash: true})

        axios.post('/add-note', data)
            .then(res => {
                toast(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })

                this.getNoteList()
            })
    }

    getNoteList() {
        axios.get('/note-list')
            .then(res => {
                this.setState({
                    noteList: res.data.noteList
                })
            })

        console.log(this.state.noteList); //TODO: list have to be rendered
    }

    componentDidMount() {
        this.getNoteList()
    }

    render() {
        return (
            <Page>
                <Sidebar />
                <ContentWrapper>
                    <Card>
                        <NoteForm action='/add-note' method='post' onSubmit={this.onNoteSubmitHandler}>
                            <Input name='title' placeholder='Note Title' required />
                            <Textarea name='content' placeholder='Note Content...' required />
                            <Button type='submit' text='Save Note' />
                        </NoteForm>
                    </Card>
                    <Card>
                        Note list
                    </Card>
                </ContentWrapper>

                <ToastContainer />
            </Page>
        )
    }
}
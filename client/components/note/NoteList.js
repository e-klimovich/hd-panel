import React, { Component } from 'react'
import axios from 'axios'
import serialize from 'form-serialize'
import { toast } from 'react-toastify'

import Card from './../../pages/decorators/card.decorator'
import Form from './../forms/Form'
import Note from './NoteItem'

class NoteList extends Component {
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

        axios.post('/api/add-note', data)
            .then(res => {
                toast(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 3000
                })

                this.getNoteList()
            })

        e.target.reset()
    }

    getNoteList() {
        axios.post('/api/note-list')
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
        const formScheme = [
            {
                schemeType: 'input',
                name: 'title',
                placeholder: 'Note Title',
                required: true
            },
            {
                schemeType: 'textarea',
                name: 'content',
                placeholder: 'Note Content...',
                required: true
            }
        ]

        const noteItemList = this.state.noteList.length
            ? this.state.noteList.map((itm, idx) => <Note key={idx} data={itm}/>)
            : <Card>There are no results yet</Card>

        return(
            <div>
                { noteItemList }

                <Card>
                    <Form formScheme={formScheme} btnName='Add Note' onSubmit={this.onNoteSubmitHandler} />
                </Card>
            </div>
        )
    }
}

export default NoteList
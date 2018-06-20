import React, { Component } from 'react'
import serialize from 'form-serialize'
import { connect } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

import Card from './../../containers/decorators/card.decorator'
import Form from './../forms/Form'
import Note from './NoteItem'

import { ADD_NOTE_FORM_SCHEME, TOAST_SETTINGS } from './../../constatns/settings'

import * as noteActions from '../../actions/notes'

class NoteList extends Component {
    onAddNote(e) {
        e.preventDefault()

        const data = serialize(e.target, {hash: true})
        
        return axios.post('/api/add-note', data)
            .then(data => {
                console.log(data)
                this.props.addNote(data)
                toast('Note was successfully created', TOAST_SETTINGS)
            })
    }

    componentDidMount() {
        this.props.fetchNotes
    }

    render() {
        const noteItemList = this.props.noties
            ? this.props.noties.map((itm, idx) => <Note key={idx} data={itm}/>)
            : <Card>There are no results yet</Card>

        return(
            <div>
                { noteItemList }

                <Card>
                    <Form formScheme={ADD_NOTE_FORM_SCHEME} btnName='Add Note' onSubmit={this.onAddNote.bind(this)} />
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        noties: state.noties
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNotes: noteActions.fetchNoties(dispatch),
        addNote: noteActions.addNote
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList)
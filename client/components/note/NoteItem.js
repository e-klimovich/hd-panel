import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import serialize from 'form-serialize'
import { connect } from 'react-redux'

import Card from './../../containers/decorators/card.decorator'
import Textarea from './../Textarea'
import Button from './../Button'

import * as noteActions from '../../actions/notes'

const Title = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        margin-bottom: 0;
    }

    small {
        font-weight: 300;
        margin-left: 15px;
        font-size: 60%;
    }
`

const Date = styled.div`
    margin-top: 15px;
    font-size: 13px;
    color: #8c8c8c;
    text-align: left;
`

const Content = styled.p`
    line-height: 1.8;
    text-align: left;
`

const BtnControlsWrapper = styled.div`
    span {
        cursor: pointer;
        font-size: 18px;
        margin-left: 10px;
        color: #afafaf;
        position: relative;
        z-index: 1;

        &:hover {
            color: #7d7d7d;
        }

        &:active {
            transform: scale(0.97);
        }
    }  
`

const EditForm = styled.form`
    width: 100%;
    text-align: right;
`

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inEditProcess: false,
            note: this.props.data
        }
    }

    onEditNoteHandler() {
        this.setState({
            inEditProcess: true
        })
    }

    onNoteSaveHandler(e) {
        e.preventDefault()

        let data = serialize(e.target, {hash: true})
        let editedNote = this.state.note

        editedNote.content = data.content

        axios.post('/api/update-note', editedNote)
            .then(res => {
                if(res) {
                    toast(res.data.message, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 3000
                    })

                    this.setState({
                        inEditProcess: false,
                        note: editedNote
                    })
                }
            })
    }

    onDeleteNote(e) {
        e.preventDefault()

        this.props.deleteNote({
            _id: this.props.data._id
        })
    }

    render() {
        const {...data} = this.props.data

        const noteContent = this.state.inEditProcess
            ? <EditForm onSubmit={this.onNoteSaveHandler.bind(this)}>
                  <Textarea name='content' value={this.state.note.content} placeholder='Note Content...' required />
                  <Button type='submit' text='Save Note' />
              </EditForm>
            : <Content>{data.content}</Content>

        return (
            <Card>
                <Title>
                    <h2>
                        {data.title}
                        <small>
                            <Link to={`/profile/${data.author_id}`}>{'all user\'s notes'}</Link>
                        </small>
                    </h2>

                    <BtnControlsWrapper>
                        <Icon name='pencil-alt' onClick={this.onEditNoteHandler.bind(this)} />
                        <Icon name='trash-alt' onClick={this.onDeleteNote.bind(this)} />
                    </BtnControlsWrapper>
                    
                </Title>
                {noteContent}
                <Date>{data.create_date.split('T')[0]}</Date>
            </Card>
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
        deleteNote: (payload) => noteActions.deleteNote(dispatch, payload)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Note)
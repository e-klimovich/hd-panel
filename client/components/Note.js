import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import serialize from 'form-serialize'

import Card from '../pages/decorators/card.decorator'
import Textarea from '../components/Textarea'
import Button from '../components/Button'

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
`

const Content = styled.p`
    line-height: 1.8;
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

const NoteInner = styled.div`
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.65);
        display: ${props => props.deleted ? 'none' : 'block'}
    }
`

export default class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNotDeleted: true,
            inEditProcess: false,
            note: this.props.data
        }

        this.removeCurrentNote = this.removeCurrentNote.bind(this)
        this.onEditNoteHandler = this.onEditNoteHandler.bind(this)
        this.revertCurrentNote = this.revertCurrentNote.bind(this)
        this.onNoteSaveHandler = this.onNoteSaveHandler.bind(this)
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

    removeCurrentNote() {
        axios.post('/api/remove-note', {_id : this.props.data._id})
            .then(res => {
                if(res) {
                    toast(res.data.message, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 3000
                    })

                    this.setState({
                        isNotDeleted: false
                    })
                }
            })
    }

    revertCurrentNote() {
        axios.post('/api/add-note', this.state.note)
            .then(res => {
                toast(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 3000
                })
            })

        this.setState({
            isNotDeleted: true
        })
    }

    render() {
        const {...data} = this.props.data

        const btnControls = this.state.isNotDeleted
            ? <BtnControlsWrapper>
                  <Icon name='pencil-alt' onClick={this.onEditNoteHandler} />
                  <Icon name='trash-alt' onClick={this.removeCurrentNote} />
              </BtnControlsWrapper>
            : <BtnControlsWrapper>
                  <Icon name='undo' onClick={this.revertCurrentNote} />
              </BtnControlsWrapper>

        const noteContent = this.state.inEditProcess
            ? <EditForm onSubmit={this.onNoteSaveHandler}>
                  <Textarea name='content' value={this.state.note.content} placeholder='Note Content...' required />
                  <Button type='submit' text='Save Note' />
              </EditForm>
            : <Content>{data.content}</Content>

        return (
            <Card>
                <NoteInner deleted={this.state.isNotDeleted}>
                    <Title>
                        <h2>
                            {data.title}
                            <small>
                                <Link to={`/profile/${data.author_id}`}>{'all user\'s notes'}</Link>
                            </small>
                        </h2>

                        {btnControls}
                        
                    </Title>
                    {noteContent}
                    <Date>{data.create_date.split('T')[0]}</Date>
                </NoteInner>
            </Card>
        )
    }
}
import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import { Link } from 'react-router-dom'

import Card from '../pages/decorators/card.decorator'

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

const BtnControls = styled.div`
    background: none;
    border: none;
    
    span {
        cursor: pointer;
        font-size: 18px;
        margin-left: 10px;
        color: #afafaf;

        &:hover {
            color: #7d7d7d;
        }

        &:active {
            transform: scale(0.97);
        }
    }  
`

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {...data} = this.props.data

        return (
            <Card>
                <Title>
                    <h2>
                        {data.title}
                        <small>
                            <Link to={`/profile/${data._id}`}>{'all user\'s notes'}</Link>
                        </small>
                    </h2>
                    <BtnControls>
                        <Icon name='pencil-alt' />
                        <Icon name='trash-alt' />
                    </BtnControls>
                </Title>
                <Content>{data.content}</Content>
                <Date>{data.create_date.split('T')[0]}</Date>
            </Card>
        )
    }
}
import React, { Component } from 'react'

import styled from 'styled-components'

const Btn = styled.button`
    background-image: linear-gradient(45deg, #843CF7, #38B8F2);
    background-repeat: repeat;
    border-radius: 23px;
    color: #ffffff;
    cursor: pointer;
    height: 46px;
    padding: 14px 40px;
    margin-top: 15px;
    transform: scale(1);

    &:focus {
        transform: scale(0.98);
    }
`

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        const { type, text } = this.props;

        return (
            <Btn type={type}>{text}</Btn>
        )
    }
}
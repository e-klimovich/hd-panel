import React, { Component } from 'react'

import styled from 'styled-components'

const FormGroup = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;
`

const TextareaField = styled.textarea`
    color: #495057;
    background-color: #FFFFFF;
    border: 1px solid #CED4DA;
    border-radius: 18px;
    line-height: 36px;
    width: 100%;
    min-height: 150px;
    padding-left: 18px;
    font-size: 16px;
`

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, placeholder, required } = this.props;

        return (
            <FormGroup>
                <TextareaField 
                    name={name} 
                    placeholder={placeholder} 
                    required={required} 
                    autoComplete='off' />
            </FormGroup>
        )
    }
}
import React, { Component } from 'react'

import styled from 'styled-components'

const FormGroup = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;
`

const InputField = styled.input`
    color: #495057;
    background-color: #FFFFFF;
    border: 1px solid #CED4DA;
    border-radius: 18px;
    line-height: 36px;
    width: 100%;
    padding-left: 18px;
    font-size: 16px;
`

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, placeholder, required, defaultValue } = this.props;
        const type = this.props.type || 'text';

        return (
            <FormGroup>
                <InputField 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    defaultValue={defaultValue} 
                    required={required} 
                    autoComplete='off' />
            </FormGroup>
        )
    }
}

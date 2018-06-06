import React, { Component } from 'react'

import './button.scss'

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
            <button type={type} className='btn'>{text}</button>
        )
    }
}
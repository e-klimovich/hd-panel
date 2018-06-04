import React, { Component } from 'react'

import './input.scss'


export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        const { name, placeholder } = this.props;
        const type = this.props.type || 'text';

        return (
            <div className='input-group'>
                <input 
                    type={type} 
                    name={name} 
                    value={this.state.value} 
                    placeholder={placeholder} 
                    autoComplete='off' 
                    onChange={this.handleChange} />
            </div>
        )
    }
}

import React, { Component } from 'react'

import Input from './../Input'
import Textarea from './../Textarea'
import Button from './../Button'

export default class From extends Component {
    constructor(props) {
        super(props)

        this.formSchemeParse = this.formSchemeParse.bind(this)
    }

    formSchemeParse(schemeItem, idx) {
        const { name, placeholder, required } = schemeItem

        switch(schemeItem.schemeType) {
            case 'textarea':
                return <Textarea name={name} placeholder={placeholder} required={required} key={idx} />

            case 'password':
                return <Input type='password' name={name} placeholder={placeholder} required={required} key={idx} />

            default:
                return <Input type='text' name={name} placeholder={placeholder} required={required} key={idx} />
        }
    }

    render() {
        return(
            <form onSubmit={this.props.onSubmit}>
                {
                    this.props.formScheme.map((itm, idx) => this.formSchemeParse(itm, idx))
                }
                <Button text={this.props.btnName} />
            </form>
        )
    }
}
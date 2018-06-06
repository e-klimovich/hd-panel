import React, { Component } from 'react'

import './card.scss'

export default class Card extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className='card'>
                {children}
            </div>
        )
    }
}

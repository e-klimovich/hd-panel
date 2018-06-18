import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    box-shadow: 0 6px 0 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 20px;
    background-color: #ffffff;
    margin: 30px;
    text-align: center;
`

export default class Card extends Component {
    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                {children}
            </Wrapper>
        )
    }
}

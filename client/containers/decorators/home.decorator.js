import React, { Component } from 'react'
import styled from 'styled-components'

import Page from './page.decorator'
import Sidebar from './../../components/sidebar/Sidebar'

const ContentWrapper = styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    padding: 15px 0;
    overflow-x: hidden;
    overflow-y: auto;
`

export default class Home extends Component {
    render() {
        return (
            <Page>
                <Sidebar />
                <ContentWrapper>
                    {this.props.children}
                </ContentWrapper>
            </Page>
        )
    }
}
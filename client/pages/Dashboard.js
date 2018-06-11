import React, { Component } from 'react'
import styled from 'styled-components'

import Page from './decorators/page.decorator'
import Sidebar from './../components/sidebar/Sidebar'

const ContentWrapper = styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    padding: 15px 30px;
    overflow-x: hidden;
    overflow-y: auto;
`

export default class Dashboard extends Component {
    render() {
        return (
            <Page>
                <Sidebar />
                <ContentWrapper>
                    Это контент
                </ContentWrapper>
            </Page>
        )
    }
}
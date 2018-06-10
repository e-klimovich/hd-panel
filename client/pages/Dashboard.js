import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './decorators/page.decorator'

export default class Dashboard extends Component {
    render() {
        return (
            <Page>
                This is user dashboard
            </Page>
        )
    }
}
import React, { Component } from 'react'
// import styled from 'styled-components'
import { connect } from 'react-redux'

import Card from './../../containers/decorators/card.decorator'

class UserDashboardForAdmin extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        alert('ID: ' + this.props.location.pathname.split('/')[2])
    }

    render() {
        return (
            <Card>
                <div>user profile</div>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    location: state.router.location
})

export default connect(
    mapStateToProps,
    null
)(UserDashboardForAdmin)
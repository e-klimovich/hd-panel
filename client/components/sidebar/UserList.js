import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Icon from 'react-fontawesome'

import * as userActions from './../../actions/users'

const ListTitle = styled.div`
    font-size: 26px;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
`

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers
    }

    render() {
        const UserList = this.props.users.map((itm, idx) => (
            <Link to={`/profile/${itm._id}`} key={idx}>
                <Icon name='user-astronaut' />
                {itm.username}
            </Link>
        ))

        return(
            <div>
                <ListTitle>Users</ListTitle>
                {UserList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: userActions.fetchUsers(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
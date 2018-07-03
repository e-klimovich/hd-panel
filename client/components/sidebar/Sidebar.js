import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import { connect } from 'react-redux'

import UserList from './UserList'

const SidebarWrapper = styled.div`
    height: 100vh;
    width: 300px;
    background-image: linear-gradient(45deg, rgba(120, 2, 6, 0.7), rgba(6, 17, 97, 0.9)),
                      url(https://lh5.googleusercontent.com/-apf6yLr70Sk/TYBvkiWCyxI/AAAAAAAACpw/ZRi09ngpJJQ/s640/98ce7a838172.jpg);
    background-size:cover;
    box-shadow: 2px 10px 30px 0 rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    overflow-y: auto;

    a {
        color: #ffffff;
    }
`

const Logo = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

const NavWrapper = styled.div`
    margin-top: 30px;
    font-size: 18px;

    a {
        display: block;
        line-height: 50px;
        padding: 0 15px;
        margin-bottom: 5px;

        span {
            margin-right: 10px;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`

class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <Logo>
                    <Link to='/'>HELP DESK</Link>
                </Logo>

                <NavWrapper>
                    <Link to='/'><Icon name='edit' />My notes</Link>
                    <Link to='/edit-profile'><Icon name='user-edit' />My profile</Link>

                    { this.props.user.isAdmin === true ? <UserList /> : null }
                    
                </NavWrapper>
            </ SidebarWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.authUser.user
})

export default connect(
    mapStateToProps,
    null
)(Sidebar)
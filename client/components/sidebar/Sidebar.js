import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import axios from 'axios';

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

const User = styled.div`
    color: #ffffff;
`

export default class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: {},
            users: []
        }

        this.logOutHandler = this.logOutHandler.bind(this)
        this.getUserList = this.getUserList.bind(this)
    }

    logOutHandler(e) {
        e.preventDefault

        axios.get('/logout')
    }

    getUserList() {
        axios.post('/api/get-users')
            .then(res => {
                if(!res.data.err) {
                    this.setState({
                        currentUser: res.data.currentUser,
                        users: res.data.users
                    })
                }
            })
    }

    componentDidMount() {
        this.getUserList()
    }

    render() {
        const users = this.state.users.map((itm, idx) => {
            <User key={idx}>{itm.username}</User>
        })

        return (
            <SidebarWrapper>
                <Logo>
                    <Link to='/'>HELP DESK</Link>
                </Logo>

                <NavWrapper>
                    <a href='/logout' onClick={this.logOutHandler}>
                        <Icon name='sign-out-alt' />
                        Logout
                    </a>
                    <br/>
                    {users}
                </NavWrapper>
            </ SidebarWrapper>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'react-fontawesome'

const SidebarWrapper = styled.div`
    height: 100vh;
    width: 300px;
    background-image: linear-gradient(45deg, #780206, #061161);
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

const NavWrapper = styled.ul`
    margin-top: 30px;
    font-size: 18px;

    a {
        display: block;
        line-height: 50px;
        padding: 0 15px;

        span {
            margin-right: 10px;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SidebarWrapper>
                <Logo>
                    <Link to='/'>HELP DESK</Link>
                </Logo>

                <NavWrapper>
                    <Link to='/logout'>
                        <Icon name='sign-out-alt' />
                        Logout
                    </Link>
                </NavWrapper>
            </ SidebarWrapper>
        )
    }
}
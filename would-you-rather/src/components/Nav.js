import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    render() {
        const { users, authedUser } = this.props
        return(
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        User: {users[authedUser].name}
                        <img width="40" height="40" src={users[authedUser].avatarURL} alt={`${users[authedUser].name} Avatar`} />
                    </li>
                    <li>
                        <NavLink to='/' onClick={() => this.props.dispatch(setAuthedUser(null))}>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({ authedUser, users })  {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Nav)
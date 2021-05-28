import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

    logUserOut = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(null))
        return <Redirect to='/' />
    }

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
                        <NavLink to='/new'>
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
                        <button onClick={this.logUserOut}>Logout</button>
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
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
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
                    User: {props.authedUser}
                </li>
                <li>
                    <NavLink to='/logout'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
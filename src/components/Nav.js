import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { LogoutIcon } from '@heroicons/react/solid'

class Nav extends Component {
    render() {
        const { users, authedUser } = this.props
        return(
            <nav className="bg-gray-800">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center pr-2">
                        <div className="flex space-x-4">
                            <NavLink to='/' className="text-white px-3 py-1 mx-4 rounded-md text-lg font-black">
                                WYR?
                            </NavLink>
                            <NavLink to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </NavLink>
                            <NavLink to='/leaderboard' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Leaderboard
                            </NavLink>
                            <NavLink to='/add' className="text-white bg-indigo-500 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                + New Question
                            </NavLink>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <p className="text-gray-300 px-3 py-2 text-sm font-bold">{users[authedUser].name}</p>
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-500" src={users[authedUser].avatarURL} alt={`${users[authedUser].name} Avatar`} />
                        <NavLink to='/' onClick={() => this.props.dispatch(setAuthedUser(null))} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 mx-2 rounded-md text-sm font-medium">
                            <LogoutIcon className="h-5 w-5 text-gray-300"/>
                        </NavLink>
                    </div>
                </div>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Auth extends Component {

    state = {
        selectedUser: 'default',
    }

    authenticateUser = (e) => {
        const selectedUser = e.target.value
        this.setState(() => ({
            selectedUser
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { selectedUser } = this.state
        this.props.dispatch(setAuthedUser(selectedUser))

        this.setState(() => ({
            selectedUser: null, 
        }))
    }

    render() {
        const { users } = this.props
        const { selectedUser } = this.state

        return(
            <div className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex h-screen justify-center items-center">
                        <div className="w-2/5 text-center bg-gray-800 rounded-xl">
                            <h3 className="font-extrabold text-3xl text-white pt-24 pb-10">Would You Rather...?</h3>
                            <form onSubmit={this.handleSubmit}>
                                <select className="block w-60 mx-auto rounded-md text-white bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-700 focus:ring-0" value={selectedUser} onChange={this.authenticateUser}>
                                    <option key="default" value="default" disabled>Select User...</option>
                                    {Object.keys(users).map((user, index) => (
                                        <option key={index} value={users[user].id}>{users[user].name}</option>
                                    ))}
                                </select>
                                <br></br>
                                <button className={`w-60 ${selectedUser === null || selectedUser === 'default' ? 'text-white bg-indigo-300 hover:bg-indigo-300' : 'text-white bg-indigo-500 hover:bg-indigo-600'} hover:text-white px-3 py-2 mt-2 mb-24 rounded-md text-md font-medium`} type='submit' disabled={selectedUser === null || selectedUser === 'default' ? true : false}>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users })  {
    return {
        users
    }
}

export default connect(mapStateToProps)(Auth)
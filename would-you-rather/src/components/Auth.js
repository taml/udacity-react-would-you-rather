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
            <div>
                <h3>Would You Rather...?</h3>
                <form onSubmit={this.handleSubmit}>
                    <select value={selectedUser} onChange={this.authenticateUser}>
                        <option key="default" value="default" disabled>Select User...</option>
                        {Object.keys(users).map((user, index) => (
                            <option key={index} value={users[user].id}>{users[user].name}</option>
                        ))}
                    </select>
                    <button type='submit' disabled={selectedUser === null || selectedUser === 'default' ? true : false}>Sign In</button>
                </form>
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
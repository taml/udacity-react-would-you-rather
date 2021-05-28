import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Dashboard extends Component {
    render() {
        const { users, authedUser } = this.props
        return(
            <div>
                <Nav authedUser={users[authedUser].name} />
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users })  {
    return {
        authedUser, 
        users,
    }
}

export default connect(mapStateToProps)(Dashboard)
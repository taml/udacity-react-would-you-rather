import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Leader from './Leader'

class Leaderboard extends Component {
    render() {
        return(
            <div>
                <Nav />
                <h3>Leaderboard</h3>
                {this.props.leaders.map((leader) => (
                <li key={leader.name}>
                    <Leader leader={leader} />
                </li>))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const leaders = Object.keys(users).map((user) => {
        const userName = users[user].name
        const userAvatar = users[user].avatarURL
        const userQuestionsTotal = users[user].questions.length
        const userQuestionsAnsweredTotal = Object.keys(users[user].answers).length
        const leaderboardScore = userQuestionsTotal + userQuestionsAnsweredTotal
        return {
            name: userName,
            avatar: userAvatar,
            totalQuestions: userQuestionsTotal,
            totalAnswered: userQuestionsAnsweredTotal,
            leaderboardScore,
        }
    }).sort((userA, userB) => userB.leaderboardScore - userA.leaderboardScore)
    return {
        leaders, 
    }
}

export default connect(mapStateToProps)(Leaderboard)
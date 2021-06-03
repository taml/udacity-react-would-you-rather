import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Leader from './Leader'

class Leaderboard extends Component {
    render() {
        return(
            <div className="bg-gray-50">
                <Nav />
                <div className="container mx-auto pb-12 px-4">
                    <h3 className="font-extrabold text-3xl text-center text-gray-700 pt-10 pb-10">Leaderboard</h3>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-2 col-span-4">
                            {this.props.leaders.map((leader) => (
                                <li className="list-none" key={leader.name}>
                                    <Leader leader={leader} />
                                </li>))}
                        </div>
                    </div>
                </div>
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
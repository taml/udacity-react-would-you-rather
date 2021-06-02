import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'

class Question extends Component {

    answerColor = (color) => color === true ? 'red' : 'black'

    percentageOfVoters = (noAnswers, noOfUsers) => Math.round((noAnswers / noOfUsers) * 100) 
    

    render() {
        const { question, authorAvatar, answeredQOne, answeredQTwo, noOfUsers } = this.props
        const { author, timestamp } = question
        return(
            <div>
                <h3>Would you rather...?</h3>
                <p>{`By ${author}`}</p>
                <img width="100" height="100" src={authorAvatar} alt={`${author} Avatar`} />
                <p>{`Posted on ${formatDate(timestamp)}`}</p>
                <p style={{color: this.answerColor(answeredQOne)}}>{ question.optionOne.text }</p>
                {(answeredQOne === true || answeredQTwo) === true && 
                    <div>
                        <p>{question.optionOne.votes.length} Answers</p>
                        <p>{this.percentageOfVoters(question.optionOne.votes.length, noOfUsers)} % of Users have selected this option</p>
                    </div>
                }
                <p style={{color: this.answerColor(answeredQTwo)}}>{ question.optionTwo.text }</p>
                {(answeredQTwo === true || answeredQOne === true) && 
                    <div>
                        <p>{question.optionTwo.votes.length} Answers</p>
                        <p>{this.percentageOfVoters(question.optionTwo.votes.length, noOfUsers)} % of Users have selected this option</p>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }){
    const question = Object.values(questions).filter((question) => question.id === id)
    const authorAvatar = users[question[0].author].avatarURL
    const answeredOne = question[0].optionOne.votes.filter((vote) => vote === authedUser)
    const answeredTwo = question[0].optionTwo.votes.filter((vote) => vote === authedUser)
    return {
        question: question[0], 
        authorAvatar,
        answeredQOne: answeredOne.length === 1,
        answeredQTwo: answeredTwo.length === 1,
        noOfUsers: Object.values(users).length
    }
} 

export default connect(mapStateToProps)(Question)
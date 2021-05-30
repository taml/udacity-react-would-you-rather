import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Dashboard extends Component {
    render() {
        const { authedUser, questions, users, unansweredQuestions, answeredQuestions } = this.props
        return(
            <div>
                <Nav />
                <h3>Unanswered Questions</h3>
                { unansweredQuestions.map((question) => 
                    <li key={question.id}>
                        Would you rather...? <br></br>
                        { question.author } <br></br>
                        { question.timestamp } <br></br>
                        { question.optionOne.text } <br></br>
                        { question.optionTwo.text } <br></br>
                    </li>
                ) }
                <h3>Answered Questions</h3>
                { answeredQuestions.map((question) => 
                    <li key={question.id}>
                        Would you rather...? <br></br>
                        { question.author } <br></br>
                        { question.timestamp } <br></br>
                        { question.optionOne.text } <br></br>
                        { question.optionTwo.text } <br></br>
                    </li>
                ) }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users })  {

    const answeredQuestionsId = Object.keys(users[authedUser].answers).map((answer) => questions[answer].id)
    const answeredQuestions = Object.keys(users[authedUser].answers).map((answer) => questions[answer])
        .sort((questionA, questionB) => questionB.timestamp - questionA.timestamp)
    const unansweredQuestions = Object.values(questions).filter((question) => !answeredQuestionsId.includes(question.id))
        .sort((questionA, questionB) => questionB.timestamp - questionA.timestamp)
    
    console.log(answeredQuestions)
    console.log(unansweredQuestions)

    return {
        authedUser, 
        questions,
        users,
        unansweredQuestions,
        answeredQuestions,
    }
}

export default connect(mapStateToProps)(Dashboard)
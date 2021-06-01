import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'

class Dashboard extends Component {

    state = {
        unansweredSelected: true,
        answeredSelected: false,
    }

    handleUnansweredView = (e) => {
        e.preventDefault()
        this.setState(() => ({
            unansweredSelected: true,
            answeredSelected: false,
        }))
    }

    handleAnsweredView = (e) => {
        e.preventDefault()
        this.setState(() => ({
            unansweredSelected: false,
            answeredSelected: true,
        }))
    }

    render() {
        const { authedUser, questions, users, unansweredQuestions, answeredQuestions } = this.props
        const { unansweredSelected, answeredSelected } = this.state
        return(
            <div>
                <Nav />
                <button onClick={this.handleUnansweredView}>Unanswered Questions</button><button onClick={this.handleAnsweredView}>Answered Questions</button>
                { unansweredSelected === true && <div>
                    <h3>Unanswered Questions</h3>
                    { unansweredQuestions.map((question) => 
                        <li key={question.id}>
                            <Question id={question.id} />
                        </li>
                ) }
                </div> }
                { answeredSelected === true && <div>
                    <h3>Answered Questions</h3>
                    { answeredQuestions.map((question) => 
                        <li key={question.id}>
                            <Question id={question.id} />
                        </li>
                    ) }
                </div> }
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
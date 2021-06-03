import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import QuestionPreview from './QuestionPreview'
import { withRouter } from 'react-router-dom'

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
        const { users, unansweredQuestions, answeredQuestions } = this.props
        const { unansweredSelected, answeredSelected } = this.state
        return(
            <div>
                <Nav />
                <div className="container mx-auto py-10 px-4 text-center">
                    <button className="text-white bg-indigo-500 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={this.handleUnansweredView}>Unanswered Questions</button>
                    <button className="text-gray-300 bg-indigo-500 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={this.handleAnsweredView}>Answered Questions</button>
                    { unansweredSelected === true && <div>
                        <h3>Unanswered Questions</h3>
                        { unansweredQuestions.map((question) => 
                            <li key={question.id}>
                                <QuestionPreview question={question} avatar={users[question.author].avatarURL} linkText={'Answer Question'}/>
                            </li>
                    ) }
                        { unansweredQuestions.length === 0 && 
                        <p>You have no unanswered questions left!</p>}
                    </div> }
                    { answeredSelected === true && <div>
                        <h3>Answered Questions</h3>
                        { answeredQuestions.map((question) => 
                            <li key={question.id}>
                                <QuestionPreview question={question} avatar={users[question.author].avatarURL} linkText={'View Question'}/>
                            </li>
                        ) }
                        { answeredQuestions.length === 0 && 
                        <p>You have not answered any questions!</p>}
                    </div> }
                </div>
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
    return {
        users,
        unansweredQuestions,
        answeredQuestions,
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))
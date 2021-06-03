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
            <div className="bg-gray-50">
                <Nav />
                <div className="container mx-auto pb-12 px-4">
                    <div className="text-center">
                        <button className={`w-60 ${unansweredSelected === true ? 'text-white' : 'text-gray-300'} bg-indigo-500 hover:bg-indigo-600 hover:text-white px-5 py-2 mt-14 mx-2 rounded-md text-md font-medium`} onClick={this.handleUnansweredView}>Unanswered Questions</button>
                        <button className={`w-60 ${answeredSelected === true ? 'text-white' : 'text-gray-300'} bg-indigo-500 hover:bg-indigo-600 hover:text-white px-5 py-2 mt-14 mx-2 rounded-md text-md font-medium`} onClick={this.handleAnsweredView}>Answered Questions</button>
                    </div>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-2 col-span-4">
                            { unansweredSelected === true && <div>
                            <h3 className="font-extrabold text-3xl text-center text-gray-700 pt-10 pb-10">Unanswered Questions</h3>
                            { unansweredQuestions.map((question) => 
                                <li className="list-none" key={question.id}>
                                    <QuestionPreview question={question} avatar={users[question.author].avatarURL} linkText={'Answer'}/>
                                </li>
                            ) }
                            { unansweredQuestions.length === 0 && 
                                <p>You have no unanswered questions left!</p>}
                            </div> }
                            { answeredSelected === true && <div>
                                <h3 className="font-extrabold text-3xl text-center text-gray-700 pt-10 pb-10">Answered Questions</h3>
                                { answeredQuestions.map((question) => 
                                    <li className="list-none" key={question.id}>
                                        <QuestionPreview question={question} avatar={users[question.author].avatarURL} linkText={'View'}/>
                                    </li>
                                ) }
                                { answeredQuestions.length === 0 && 
                                <p>You have not answered any questions!</p>}
                            </div> }
                        </div>
                    </div>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'

class Question extends Component {

    state = {
        selected: 'optionOne',
    }

    answerColor = (color) => color === true ? 'red' : 'black'

    percentageOfVoters = (noAnswers, noOfUsers) => Math.round((noAnswers / noOfUsers) * 100) 

    handleSelected = (e) => {
        const selected = e.target.value
        this.setState(() => ({
            selected
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, authedUser, id } = this.props
        const userAnswer = {
            authedUser,
            qid: id,
            answer: this.state.selected,
        }
        dispatch(handleAnswerQuestion(userAnswer))
    }
    

    render() {
        const { question, authorAvatar, answeredQOne, answeredQTwo, noOfUsers } = this.props
        const { author } = question
        return(
            <div className="container -mt-14 mx-auto px-4">
                <div className="flex h-screen justify-center items-center">
                    <div className="w-2/5 bg-gray-700 rounded-xl p-12">
                        <img className="w-32 mx-auto" src={authorAvatar} alt={`${author} Avatar`} />
                        <p className="text-white text-center font-medium pt-4">{`By ${author}`}</p>
                        <h3 className="text-white font-extrabold text-xl text-center pt-4 pb-10">Would you rather...</h3>
                        {(answeredQOne === !true && answeredQTwo === !true) && 
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    <input type="radio" value="optionOne" checked={this.state.selected === 'optionOne'}
                                        onChange={this.handleSelected} />{question.optionOne.text}
                                </label>
                                <label>
                                    <input type="radio" value="optionTwo" checked={this.state.selected === 'optionTwo'}
                                        onChange={this.handleSelected} />{question.optionTwo.text}
                                </label>
                                <button type='submit'>Submit Answer</button>
                            </form>
                        }
                        {(answeredQOne === true || answeredQTwo === true) && 
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    {answeredQOne === true ? <div><ThumbUpIcon className="w-6 pb-4 mx-auto text-green-400" /> <p className="text-white font-semibold">{question.optionOne.text}</p></div> 
                                        : <div><ThumbDownIcon className="w-6 pb-4 mx-auto text-gray-300" /> <p className="text-white font-semibold">{question.optionOne.text}</p></div>}
                                    <p className="text-white">{`${question.optionOne.votes.length} ${question.optionOne.votes.length !== 1 ? 'Votes' : 'Vote'}`}</p>
                                    <p className="text-white">{this.percentageOfVoters(question.optionOne.votes.length, noOfUsers)} % of Votes</p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-white">Or</p>
                                </div>
                                <div className="text-center">
                                {answeredQTwo === true ? <div><ThumbUpIcon className="w-6 pb-4 mx-auto text-green-400" /> <p className="text-white font-semibold">{question.optionTwo.text}</p></div> 
                                        : <div><ThumbDownIcon className="w-6 pb-4 mx-auto text-gray-300" /> <p className="text-white font-semibold">{question.optionTwo.text}</p></div>}
                                    <p className="text-white">{`${question.optionTwo.votes.length} ${question.optionTwo.votes.length !== 1 ? 'Votes' : 'Vote'}`}</p>
                                    <p className="text-white">{this.percentageOfVoters(question.optionTwo.votes.length, noOfUsers)} % of Votes</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
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
        noOfUsers: Object.values(users).length,
        authedUser,
        id,
    }
} 

export default connect(mapStateToProps)(Question)
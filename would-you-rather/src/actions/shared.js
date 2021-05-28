import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addAnswerToUser } from '../actions/users'
import { addQuestion, receiveQuestions, answerQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                // dispatch(setAuthedUser(users.sarahedo))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(answer) {
    return (dispatch) => {
        dispatch(answerQuestion(answer))
        dispatch(addAnswerToUser(answer))
        return saveQuestionAnswer(answer)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            alert('There was an error saving your answer. Try again.')
        })
    }
}
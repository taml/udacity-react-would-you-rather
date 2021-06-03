import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { addQuestion, receiveQuestions, answerQuestion } from '../actions/questions'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}

export function handleAnswerQuestion(answer) {
    return (dispatch) => {
        dispatch(answerQuestion(answer))
        return saveQuestionAnswer(answer)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            alert('There was an error saving your answer. Try again.')
        })
    }
}
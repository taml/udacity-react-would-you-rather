import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
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

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser, 
        qid,
        answer,
    }
}

export function handleAnswerQuestion(answer) {
    return (dispatch) => {
        dispatch(answerQuestion(answer))
        return saveQuestionAnswer(answer)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            dispatch(answerQuestion(answer))
            alert('There was an error saving your answer. Try again.')
        })
    }
}
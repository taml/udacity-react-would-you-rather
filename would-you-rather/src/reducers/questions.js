import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.id]: action.question,
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.qid]: {
                    ...state[question.qid],
                    [question.answer]: {
                        ...state[question.qid][question.answer],
                        votes: state[question.qid][question.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}
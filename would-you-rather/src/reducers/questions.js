import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}
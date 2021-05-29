import { RECEIVE_USERS, ADD_A_TO_USER } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION:
            const { author, id } = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id]),
                }
            }
        case ADD_A_TO_USER:
            const { authedUser, q_id, answer } = action.question
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [q_id]: answer,
                    }
                }
            }
        default:
            return state
    }
}
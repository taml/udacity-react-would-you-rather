import { RECEIVE_USERS} from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

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
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    }
                }
            }
        default:
            return state
    }
}
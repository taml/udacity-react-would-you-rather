import { RECEIVE_USERS, ADD_Q_TO_USER, ADD_A_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_Q_TO_USER:
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat(question.qid),
                }
            }
        case ADD_A_TO_USER:
            const { question } = action
            return {
                ...state,
                [question.authedUser]: {
                    ...state[question.authedUser],
                    answers: {
                        ...state[question.authedUser].answers,
                        [question.qid]: question.answer,
                    }
                }
            }
        default:
            return state
    }
}
import { RECEIVE_USERS, ADD_Q_TO_USER, ADD_A_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_Q_TO_USER:
            const { author, qid } = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([qid]),
                }
            }
        case ADD_A_TO_USER:
            const { authedUser, q_id, answer } = action
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
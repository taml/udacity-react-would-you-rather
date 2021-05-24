export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_Q_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_A_TO_USER = 'ADD_ANSWER_TO_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser({author, qid}) {
    return {
        type: ADD_Q_TO_USER,
        author,
        qid,
    }
}

export function addAnswerToUser(authedUser, qid, answer) {
    return {
        type: ADD_A_TO_USER,
        authedUser, 
        qid,
        answer,
    }
}
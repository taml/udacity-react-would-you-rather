export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER'

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser
    }
}

export function unsetAuthedUser(authedUser) {
    return {
        type: UNSET_AUTHED_USER,
        authedUser
    }
}
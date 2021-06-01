export const INVALID_ID = 'Oh no! The question you have tried to request does not exist, please try viewing a different question.'
export const INVALID_PAGE = 'Oh no! That page cannot be found, please try viewing a different one.'

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}
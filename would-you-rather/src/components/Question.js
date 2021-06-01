import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render() {
        const { question, authorAvatar } = this.props
        const { id, author, timestamp } = question
        return(
            <Link to={`/question/${id}`}>
                <div>
                    <h3>Would you rather...?</h3>
                        <p>{`By ${author}`}</p>
                        <img width="100" height="100" src={authorAvatar} alt={`${author} Avatar`} />
                        <p>{`Posted on ${formatDate(timestamp)}`}</p>
                        <p>{ question.optionOne.text }</p>
                        <p>{ question.optionTwo.text }</p>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions, users }, { id }){
    const question = Object.values(questions).filter((question) => question.id === id)
    const authorAvatar = users[question[0].author].avatarURL
    return {
        question: question[0], 
        authorAvatar,
    }
} 

export default withRouter(connect(mapStateToProps)(Question))
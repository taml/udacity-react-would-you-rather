import React from 'react'
import { formatDate } from '../utils/helper'
import { Link } from 'react-router-dom'

function QuestionPreview(props) {
    const { question, avatar, linkText } = props
    return(
        <div>
            <h3>Would you rather...?</h3>
            <p>{`By ${question.author}`}</p>
            <img width="100" height="100" src={avatar} alt={`${question.author} Avatar`} />
            <p>{`Posted on ${formatDate(question.timestamp)}`}</p>
            <p>{question.optionOne.text}</p>
            <p>{question.optionTwo.text}</p>
            <Link to={`/question/${question.id}`}>{ linkText }</Link>
        </div>
    )
}

export default QuestionPreview
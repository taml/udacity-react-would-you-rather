import React, { Component } from 'react'
import { formatDate } from '../utils/helper'

class Question extends Component {
    render() {
        const { question, authorAvatar } = this.props
        const { author, timestamp } = question
        return(
            <div>
                <h3>Would you rather...?</h3>
                    <p>{`By ${author}`}</p>
                    <img width="100" height="100" src={authorAvatar} alt={`${author} Avatar`} />
                    <p>{`Posted on ${formatDate(timestamp)}`}</p>
                    <p>{ question.optionOne.text }</p>
                    <p>{ question.optionTwo.text }</p>
            </div>
        )
    }
}

export default Question
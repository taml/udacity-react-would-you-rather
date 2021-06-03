import React from 'react'
import { formatDate } from '../utils/helper'
import { Link } from 'react-router-dom'

function QuestionPreview(props) {
    const { question, avatar, linkText } = props
    return(
        <div className="bg-gray-700 rounded-xl grid grid-cols-6 p-12 mb-12">
            <div>
                <img className="w-32" src={avatar} alt={`${question.author} Avatar`} />
                <p className="text-white text-center font-medium pt-4">{`By ${question.author}`}</p>
            </div>
            <div className="col-span-4 px-12 my-auto">
                <h3 className="text-white font-extrabold text-xl pb-4">{`Would you rather...${question.optionOne.text} or ${question.optionTwo.text}?`}</h3>
                <p className="text-white text-sm">{`Posted on ${formatDate(question.timestamp)}`}</p>
            </div>
            <div className="text-center my-auto">
                <Link className="text-white bg-indigo-500 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-center" to={`/question/${question.id}`}>{ linkText }</Link>
            </div>
        </div>
    )
}

export default QuestionPreview
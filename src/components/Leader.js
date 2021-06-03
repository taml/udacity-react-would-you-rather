import React from 'react'

function Leader(props) {
    const { name, avatar, totalQuestions, totalAnswered, leaderboardScore } = props.leader
    return(
        <div className="bg-gray-700 rounded-xl grid grid-cols-6 p-12 mb-12">
            <div>
                <img className="w-32" src={avatar} alt={`${name} Avatar`} />
            </div>
            <div className="col-span-4 px-12 my-auto">
                <p className="text-white font-extrabold text-xl pb-4">{name}</p>
                <p className="text-white text-md">Total Questions Asked: <span className="font-bold">{totalQuestions}</span></p>
                <p className="text-white text-md">Total Questions Answered: <span className="font-bold">{totalAnswered}</span></p>
            </div>
            <div className="text-center">
                <span className="w-28 h-28 block rounded-full bg-indigo-500">
                    <p className="text-white text-sm pt-8">Total Score</p>
                    <p className="text-white font-extrabold text-2xl">{leaderboardScore}</p>
                </span>
            </div>
        </div>
    )
}

export default Leader
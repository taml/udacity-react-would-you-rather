import React from 'react'

function Leader(props) {
    const { name, avatar, totalQuestions, totalAnswered, leaderboardScore } = props.leader
    return(
        <div>
            <p>{name}</p>
            <img src={avatar} alt={`${name} Avatar`} />
            <p>Total Questions: {totalQuestions}</p>
            <p>Total Answers: {totalAnswered}</p>
            <p>Total Score: {leaderboardScore}</p>
        </div>
    )
}

export default Leader
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
    render() {
        const id = this.props.match.params.question_id
        if (this.props.validId !== true) {
            return <Redirect to='/question/id_invalid' />
        }
        return(
            <div>
                <Nav />
                <Question id={id} />
            </div>
        )
    }
}

function mapStateToProps({ questions }, props) {
    const questionIds = Object.keys(questions).filter((question) => questions[question].id === props.match.params.question_id)
    const validId = questionIds.length > 0
    return {
        validId 
    }
}

export default connect(mapStateToProps)(QuestionPage)
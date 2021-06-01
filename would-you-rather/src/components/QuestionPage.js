import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'

class QuestionPage extends Component {
    render() {
        const id = this.props.match.params.question_id
        console.log(id)
        return(
            <div>
                <Nav />
                <Question id={id} />
            </div>
        )
    }
}

export default connect()(QuestionPage)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '', 
        toDashboard: false,
    }

    handleOptionOne = (e) => {
        const optionOne = e.target.value
        this.setState(() => ({
            optionOne
        }))
    }

    handleOptionTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { optionOne, optionTwo } = this.state
        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '', 
            toDashboard: true,
        }))
    }

    render() {
        const { optionOne, optionTwo, toDashboard } = this.state
        if(toDashboard === true) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <Nav />
                <div>
                    <h3>Would you rather...</h3>
                    <form onSubmit={this.handleSubmit}>
                        <textarea placeholder="Have a life supply of coffee?" value={optionOne} onChange={this.handleOptionOne}/>
                        <textarea placeholder="Have a life supply of pizza?" value={optionTwo} onChange={this.handleOptionTwo}/>
                        <button type='submit' disabled={optionOne === '' || optionTwo === '' ? true : false}>Submit Question</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)
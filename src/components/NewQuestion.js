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
            <div className="bg-gray-50">
                <Nav />
                <div className="container -mt-14 mx-auto px-4">
                    <div className="flex h-screen justify-center items-center">
                        <div className="w-2/5 text-center bg-gray-700 rounded-xl">
                            <h3 className="font-extrabold text-3xl text-white pt-24 pb-10">Would You Rather...?</h3>
                            <form onSubmit={this.handleSubmit}>
                                <textarea className="block w-60 mx-auto rounded-md text-white bg-gray-600 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0" placeholder="E.g. Have a life supply of coffee?" value={optionOne} onChange={this.handleOptionOne}/>
                                <p className="text-white py-2">Or</p>
                                <textarea className="block w-60 mx-auto rounded-md text-white bg-gray-600 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0" placeholder="E.g. Have a life supply of pizza?" value={optionTwo} onChange={this.handleOptionTwo}/>
                                <br></br>
                                <button className={`w-60 ${optionOne === '' || optionTwo === '' ? 'text-white bg-indigo-300 hover:bg-indigo-300' : 'text-white bg-indigo-500 hover:bg-indigo-600'} hover:text-white px-3 py-2 mt-2 mb-24 rounded-md text-md font-medium`} type='submit' disabled={optionOne === '' || optionTwo === '' ? true : false}>Submit Question</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)
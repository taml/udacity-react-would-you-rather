import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Auth from './Auth'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import ErrorPage from './ErrorPage'
import { INVALID_ID, INVALID_PAGE } from '../utils/helper'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        console.log(this.props.questions)
        console.log(this.props.users)
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="App">
                        {this.props.loading === true ? (<Route><Auth/></Route>) : 
                            <Switch>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/add' component={NewQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                                <Route path='/question/id_invalid' render={() => (
                                    <ErrorPage errorMessage={INVALID_ID} />
                                )} />
                                <Route path='/question/:question_id' component={QuestionPage} />
                                <Route render={() => (
                                    <ErrorPage errorMessage={INVALID_PAGE} />
                                )} />
                            </Switch>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser, questions, users })  {
    return {
        loading: authedUser === null, 
        authedUser, 
        questions,
        users
    }
}

export default connect(mapStateToProps)(App)

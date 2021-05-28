import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Auth from './Auth'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="App">
                        {this.props.loading === true ? <Auth /> : <div>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/new' component={NewQuestion} />
                            <Route path='/leaderboard' component={Leaderboard} />
                        </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser, questions })  {
    return {
        loading: authedUser === null, 
        authedUser, 
        questions,
    }
}

export default connect(mapStateToProps)(App)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Auth from './Auth'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          <Auth />
        </div>
      </Fragment>
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

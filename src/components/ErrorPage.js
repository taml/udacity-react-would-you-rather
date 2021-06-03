import React from 'react'
import Nav from './Nav'

function ErrorPage(props) {
    return(
        <div>
            <Nav />
            <h3>Error 404</h3>
            <p>{props.errorMessage}</p>
        </div>
    )
}

export default ErrorPage
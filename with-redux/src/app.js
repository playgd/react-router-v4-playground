'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

const App = ({ handleClick }) => (
  <button onClick={handleClick}>increment!</button>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick () {
      const { hey } = queryString.parse(ownProps.history.location.search)
      ownProps.history.push(`?hey=${+(hey || 0) + 1}`)
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))

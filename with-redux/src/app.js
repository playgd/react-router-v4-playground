'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

const App = ({ handleClick }) => (
  <button onClick={handleClick}>increment hey on URL!</button>
)

const mapDispatchToProps = (dispatch, { history }) => ({
  handleClick () {
    const { hey } = queryString.parse(history.location.search)
    history.push(`?hey=${+(hey || 0) + 1}`)
  }
})

export default withRouter(connect(null, mapDispatchToProps)(App))

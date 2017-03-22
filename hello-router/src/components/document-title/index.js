'use strict'

import { Component, PropTypes } from 'react'

class DocumentTitle extends Component {
  update (text) {
    document.title = Array.isArray(text) ? text.join('') : text
  }

  componentDidMount () {
    this.update(this.props.children)
  }

  componentWillReceiveProps ({ children }) {
    this.update(children)
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return null
  }
}

DocumentTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default DocumentTitle

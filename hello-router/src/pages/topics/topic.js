'use strict'

import React from 'react'
import DocumentTitle from '../../components/document-title'

export default ({ match, title }) => (
  <div>
    <DocumentTitle>{title} - Topic</DocumentTitle>
    Topic:
    <ul>
      <li>slug: {match.params.topicId}</li>
      <li>title: {title}</li>
    </ul>
  </div>
)

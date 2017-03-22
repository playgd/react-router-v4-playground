'use strict'

import React from 'react'
import DocumentTitle from '../../components/document-title'

export default ({ params, title }) => (
  <div>
    <DocumentTitle>{title} - Topic</DocumentTitle>
    Topic:
    - slug: {params.topicId}<br />
    - title: {title}
  </div>
)

'use strict'

import React from 'react'
import { Link, Route } from 'react-router-dom'
import Topic from './topic'
import DocumentTitle from '../../components/document-title'

const menu = (path) => [
  { link: `${path}/rendering`, label: 'Rendering With React' },
  { link: `${path}/components`, label: 'Components' },
  { link: `${path}/props-vs-state`, label: 'Props vs State' }
]

export default (props) => {
  const { path } = props.match

  return (
    <div>
      <DocumentTitle>Topics</DocumentTitle>
      <h2>Topics</h2>
      <ul>
        {menu(path).map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:topicId`} render={(routeProps) => (
        <Topic
          title={menu(path).find((p) => p.link.includes(routeProps.match.params.topicId)).label}
          {...routeProps}
        />
      )} />

      <Route path={path} exact render={(renderOptions) => (
        <h3>Please, select a topic</h3>
      )} />
    </div>
  )
}

'use strict'

import React from 'react'
import { Link, Match } from 'react-router'
import Topic from './topic'

const menu = (pathname) => [
  { link: `${pathname}/rendering`, label: 'Rendering With React' },
  { link: `${pathname}/components`, label: 'Components' },
  { link: `${pathname}/props-vs-state`, label: 'Props vs State' }
]

export default (props) => {
  const { pathname } = props

  return (
    <div>
      {console.log(props)}
      <h2>Topics</h2>
      <ul>
        {menu(pathname).map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Match pattern={`${pathname}/:topicId`} component={Topic} />

      <Match pattern={pathname} exactly render={(renderOptions) => {
        console.log('renderOptions:', renderOptions)
        return <h3>Please, select a topic</h3>
      }} />
    </div>
  )
}

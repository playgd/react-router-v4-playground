'use strict'

import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Home from 'pages/home'
import About from 'pages/about'
import Topics from 'pages/topics'
import NoMatch from 'pages/no-match'

import './css/style.css'

const menu = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/topics', label: 'Topics' },
  { link: '/no-route', label: 'No route' }
]

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Match exactly pattern='/' component={Home} />
      <Match pattern='/about' component={About} />
      <Match pattern='/topics' component={Topics} />

      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
)

export default App

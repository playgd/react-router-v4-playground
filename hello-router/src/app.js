'use strict'

import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import About from 'pages/about'
import Topics from 'pages/topics'
import NoRoute from 'pages/no-match'

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

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
        <Route component={NoRoute} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App

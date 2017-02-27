'use strict'

import React from 'react'
import Title from 'components/title'
import { Route, Link } from 'react-router-dom'

import 'css/style.css'

const App = () => (
  <div>
    <Title>My App</Title>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>

    <Route exact path='/' render={({ match }) => (
      <h1>Home!</h1>
    )} />

    <Route path='/about' render={({ match }) => (
      <h1>About!</h1>
    )} />
  </div>
)

export default App

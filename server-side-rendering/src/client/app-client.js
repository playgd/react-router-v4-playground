'use strict'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../app'

import 'css/style.css'

const AppClient = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppClient

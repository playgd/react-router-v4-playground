'use strict'

import express from 'express'
import React from 'react'

const app = express()

if (process.env.NODE_ENV === 'development') {
  require('./server-dev').default(app)
} else {
  require('./server-prod').default(app)
}

app.listen(3000, () => console.log('Listening on http://localhost:3000'))

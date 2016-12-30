'use strict'

import express from 'express'
import React from 'react'

const app = express()
const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'development') {
  require('./server-dev').default(app)
} else {
  require('./server-prod').default(app)
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

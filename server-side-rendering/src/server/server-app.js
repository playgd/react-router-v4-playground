'use strict'

import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../app'

const isDev = process.env.NODE_ENV === 'development'
const htmlServer = require(isDev ? './server-dev' : './server-prod').default

const app = express()
const generateHtml = htmlServer(app)

app.use(express.static(path.join(__dirname, '..')))

app.use(async (req, res) => {
  const context = {}
  const htmlApp = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  console.log('what is in context?', context)
  console.log('req.url:', req.url)

  if (context.url) {
    console.log('redirect')
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    const html = await generateHtml()
    res.send(html.replace('<!-- server -->', htmlApp))
  }
})

export default app

'use strict'

import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import App from '../app'

const isDev = process.env.NODE_ENV === 'development'
const htmlServer = require(isDev ? './server-dev' : './server-prod').default

const app = express()
const generateHtml = htmlServer(app)

app.use(express.static(path.join(__dirname, '..')))

app.use(async (req, res) => {
  const context = createServerRenderContext()
  const htmlApp = renderToString(
    <ServerRouter location={req.url} context={context}>
      <App />
    </ServerRouter>
  )

  const result = context.getResult()

  console.log('what is in result?', result)

  if (result.redirect) console.log('redirect')
  if (result.missed) console.log('missed')

  const html = await generateHtml()
  res.send(html.replace('<!-- server -->', htmlApp))
})

export default app

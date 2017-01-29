'use strict'

import path from 'path'
import webpack from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import App from '../app'

const isDev = process.env.NODE_ENV === 'development'

const configFile = isDev ? '' : '.prod'
const config = require(`../../webpack${configFile}.config`)
const compiler = webpack(config)

const filename = path.join(compiler.outputPath, 'generated.html')

export default (app) => {
  app.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: isDev,
    historyApiFallback: true,
    stats: { colors: true },
    serverSideRender: true
  }))

  if (isDev) {
    const webpackHot = require('webpack-hot-middleware')
    app.use(webpackHot(compiler))
  }

  app.use((req, res) => {
    const context = createServerRenderContext()
    const htmlApp = renderToString(
      <ServerRouter location={req.url} context={context}>
        <App />
      </ServerRouter>
    )

    const result = context.getResult()

    console.log('what is in result??', result)

    if (result.redirect) {
      console.log('redirect')
    }

    if (result.missed) {
      console.log('missed')
    }

    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return err

      const html = result.toString().replace('<!-- server -->', htmlApp)
      res.send(html)
    })
  })

  return app
}

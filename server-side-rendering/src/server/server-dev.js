'use strict'

import path from 'path'
import webpack from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import React from 'react'
import App from '../app'
import config from '../../webpack.config'

const compiler = webpack(config)

export default (app) => {
  app.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    serverSideRender: true
  }))

  app.use(webpackHot(compiler))

  app.use((req, res) => {
    const context = createServerRenderContext()
    const filename = path.join(compiler.outputPath, 'generated.html')
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
}

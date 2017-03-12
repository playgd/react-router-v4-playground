'use strict'

import { join } from 'path'
import webpack from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

const config = require(`../../webpack.config`)
const compiler = webpack(config)

const filename = join(compiler.outputPath, 'generated.html')

export default (app) => {
  app.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    compress: true,
    serverSideRender: true
  }))

  app.use(webpackHot(compiler))

  return () => new Promise((resolve, reject) => {
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return reject(err)
      resolve(result.toString())
    })
  })
}

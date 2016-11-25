'use strict'

import webpack from 'webpack'
import config from '../../webpack.config'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

const compiler = webpack(config)

export default (app) => {
  app.use(webpackDev(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  }))

  app.use(webpackHot(compiler))
}

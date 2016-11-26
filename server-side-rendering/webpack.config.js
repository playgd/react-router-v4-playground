'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),

    new HtmlPlugin({
      title: 'My app',
      filename: 'generated.html',
      template: path.join(__dirname, 'src', 'client', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'css']
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      css: path.join(__dirname, 'src', 'client', 'css')
    }
  }
})

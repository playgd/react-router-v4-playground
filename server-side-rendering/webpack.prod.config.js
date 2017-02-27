'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js'
  },

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
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  },

  plugins: [
    new CleanPlugin(['dist'], {
      root: __dirname
    }),

    new ExtractTextPlugin('[name]-[chunkhash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin({
      title: 'GitHub app',
      filename: 'generated.html',
      template: path.join(__dirname, 'src', 'client', 'html', 'template.html')
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      css: path.join(__dirname, 'src', 'client', 'css')
    }
  }
})

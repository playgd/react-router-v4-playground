'use strict'

const config = require('../../webpack.config')
const alias = config.resolve.alias

const getAlias = (al) => {
  return {
    src: alias[al],
    expose: al
  }
}

require('babel-register')({
  plugins: [
    [
      'babel-plugin-transform-require-ignore', {
        'extensions': ['.css']
      }
    ],
    [
      'babel-plugin-module-alias', Object.keys(alias).map(getAlias)
    ]
  ]
})
require('./server')

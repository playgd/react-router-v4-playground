'use strict'

import { join } from 'path'
import { readFile } from 'fs'

const filename = join(__dirname, '..', '..', 'dist', 'generated.html')

export default (app) => () => new Promise((resolve, reject) => {
  readFile(filename, 'utf8', (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

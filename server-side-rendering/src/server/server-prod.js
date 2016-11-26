'use strict'

export default (app) => {
  app.use((req, res) => {
    res.send('production')
  })
}

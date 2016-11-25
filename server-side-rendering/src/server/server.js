
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Express App')
})

if (process.env.NODE_ENV === 'development') {
  require('./server-dev').default(app)
}

app.listen(3000, () => console.log('Listening on http://localhost:3000'))

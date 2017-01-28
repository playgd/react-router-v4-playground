'use strict'

import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

require('./server-app').default(app)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

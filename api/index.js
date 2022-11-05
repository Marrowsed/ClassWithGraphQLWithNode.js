const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000 || process.env.PORT
routes(app)
app.listen(port, () => console.log(`server running in localhost:${port}`))

module.exports = app


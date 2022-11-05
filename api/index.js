const express = require('express')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app = express()
const port = 3000 || process.env.PORT
routes(app)
app.listen(port, () => console.log(`server running in localhost:${port}`))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app


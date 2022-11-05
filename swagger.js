const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/classesRoute.js', './api/routes/rolesRoute.js', './api/routes/usersRoute.js']

swaggerAutogen(outputFile, endpointsFiles)
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/classesRoute.js', './api/routes/rolesRoute.js', './api/routes/usersRoute.js', './api/routes/registriesRoute.js']

swaggerAutogen(outputFile, endpointsFiles)
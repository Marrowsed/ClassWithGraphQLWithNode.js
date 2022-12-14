const bodyParser = require('body-parser')
const users = require('./usersRoute')
const roles = require('./rolesRoute')
const classes = require('./classesRoute')
const registries = require('./registriesRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        users,
        roles,
        classes,
        registries
    )
    app.get('/', (req, res) => res.json({users: "/users", roles: "/roles", classes: "/classes", registries: "/registries" }))
}
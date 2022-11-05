const bodyParser = require('body-parser')
const users = require('./usersRoute')
const roles = require('./rolesRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        users,
        roles 
    )
    app.get('/', (req, res) => res.json({users: "/users", roles: "/roles" }))
}
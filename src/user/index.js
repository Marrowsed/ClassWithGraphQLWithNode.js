const userSchema = require('./schema/user.graphql')
const userResolver = require('./resolvers/userResolvers')
const UsersAPI = require('./datasource/user.js')

module.exports = {
    userSchema,
    userResolver,
    UsersAPI
}
const {GraphQLScalarType } = require('graphql')

const userResolver = {
    RoleType: {
        STUDENT: "STUDENT",
        TEACHER: "TEACHER",
        DIRECTOR: "DIRECTOR",
        CEO: "CEO"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date and Time String',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        users: (root, args, {dataSources }) => dataSources.usersAPI.getUsers(),
        userId: (root, {id}, {dataSources }) => dataSources.usersAPI.getUsersId(id),
    },
    Mutation: {
        addUser: (root, {user}, {dataSources}) => dataSources.usersAPI.postUsers(user),
        updateUser: (root, newData, {dataSources}) => dataSources.usersAPI.updateUsers(newData),
        deleteUser: (root, {id}, {dataSources}) => dataSources.usersAPI.deleteUsers(id)
    },
    User: {
        registry: (parent, _, {dataSources}) => dataSources.registriesAPI.getRegistriesByUser(parent.id)
    }

}

module.exports = userResolver
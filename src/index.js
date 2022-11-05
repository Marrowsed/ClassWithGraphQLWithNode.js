const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResolver = require('./user/resolvers/userResolvers')
const UsersAPI = require('./user/datasource/user.js')

const typeDefs = [userSchema]
const resolvers = [userResolver]

const server = new ApolloServer(
    {typeDefs,
    resolvers, 
    dataSources: () => {
        return  {
            usersAPI: new UsersAPI()
        }
    }});

server.listen().then(({url}) => {
    console.log(`Running in localhost:${url}`)
})
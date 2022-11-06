const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const userSchema = require('./user/schema/user.graphql')
const userResolver = require('./user/resolvers/userResolvers')
const UsersAPI = require('./user/datasource/user.js')

const classSchema = require('./class/schema/class.graphql')
const classResolver = require('./class/resolvers/classResolvers')
const ClassesAPI = require('./class/datasource/classes.js')



const typeDefs = mergeTypeDefs([userSchema, classSchema])
const resolvers = [userResolver, classResolver]

const server = new ApolloServer(
    {typeDefs,
    resolvers, 
    dataSources: () => {
        return  {
            usersAPI: new UsersAPI(),
            classesAPI: new ClassesAPI()
        }
    }});

server.listen().then(({url}) => {
    console.log(`Running in localhost:${url}`)
})
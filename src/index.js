const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { userSchema, userResolver, UsersAPI} = require('./user')
const { classSchema, classResolver, ClassesAPI} = require('./class')
const { registrySchema, registryResolver, RegistriesAPI} = require('./registries')


const typeDefs = mergeTypeDefs([userSchema, classSchema, registrySchema])
const resolvers = [userResolver, classResolver, registryResolver]

const server = new ApolloServer(
    {typeDefs,
    resolvers, 
    dataSources: () => {
        return  {
            usersAPI: new UsersAPI(),
            classesAPI: new ClassesAPI(),
            registriesAPI: new RegistriesAPI()
        }
    }});

server.listen().then(({url}) => {
    console.log(`Running in localhost:${url}`)
})
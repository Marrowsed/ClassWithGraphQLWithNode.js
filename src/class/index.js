const classSchema = require('./schema/class.graphql')
const classResolver = require('./resolvers/classResolvers')
const ClassesAPI = require('./datasource/classes.js')

module.exports = {
    classSchema,
    classResolver,
    ClassesAPI
}
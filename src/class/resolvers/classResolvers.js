const {GraphQLScalarType } = require('graphql')

const classResolver = {
    ClassTime: {
        MORNING: "MORNING",
        EVENING: "EVENING",
        NIGHT: "NIGHT"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date and Time String',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        classes: (_, __, {dataSources }) => dataSources.classesAPI.getClasses(),
        classesId: (_, {id}, {dataSources }) => dataSources.classesAPI.getClassesId(id),
    },
    Mutation: {
        addClass: (_, classes, {dataSources }) => dataSources.classesAPI.postClasses(classes),
        updateClass: (_, newData, {dataSources }) => dataSources.classesAPI.updateClasses(newData),
        deleteClass:(_, {id}, {dataSources }) => dataSources.classesAPI.deleteClasses(id),
        
    },
    Class: {
        registry: (parent, _, {dataSources}) => dataSources.registriesAPI.getRegistryByClass(parent.id)
    }

}

module.exports = classResolver
const {GraphQLScalarType } = require('graphql')

const registryResolver = {
    StatusType: {
        CONFIRMED: "CONFIRMED",
        CANCELLED: "CANCELLED",
    },
    Query: {
        //classes: (_, __, {dataSources }) => dataSources.registriesAPI.getClasses(),
        //classesId: (_, {id}, {dataSources }) => dataSources.registriesAPI.getClassesId(id),
    },
    Mutation: {
        //addClass: (_, {classes}, {dataSources }) => dataSources.registriesAPI.postClasses(classes),
        //updateClass: (_, newData, {dataSources }) => dataSources.registriesAPI.updateClasses(newData),
        //deleteClass:(_, {id}, {dataSources }) => dataSources.registriesAPI.deleteClasses(id),
        
    }

}

module.exports = registryResolver
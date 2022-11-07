const registryResolver = {
    StatusType: {
        CONFIRMED: "CONFIRMED",
        CANCELLED: "CANCELLED",
    },
    Query: {
        registries: (_, __, {dataSources }) => dataSources.registriesAPI.getRegistry(),
        registriesId: (_, {id}, {dataSources }) => dataSources.registriesAPI.getRegistriesId(id),
    },
    Mutation: {
        addRegistries: (_, ids, {dataSources }) => dataSources.registriesAPI.postRegistries(ids),
        //updateClass: (_, newData, {dataSources }) => dataSources.registriesAPI.updateClasses(newData),
        //deleteClass:(_, {id}, {dataSources }) => dataSources.registriesAPI.deleteClasses(id),
        
    }

}

module.exports = registryResolver
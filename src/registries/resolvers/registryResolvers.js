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
        updateRegistries: (_, newData, {dataSources }) => dataSources.registriesAPI.updateRegistries(newData),
        deleteRegistries:(_, {id}, {dataSources }) => dataSources.registriesAPI.deleteRegistries(id),
        
    }

}

module.exports = registryResolver
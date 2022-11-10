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
        changeStatusRegistries:(_, data, {dataSources}) => dataSources.registriesAPI.cancelRegistries(data)
    },
    Registry: {
        student_id: (parent, _, {dataSources}) => dataSources.usersAPI.getUsersId(parent.student_id),
        /*NOT USING DATALOADER
        class_id: (parent, _, {dataSources}) => dataSources.classesAPI.getClassesId(parent.class_id) */
        class_id: (parent, _, {dataSources}) => dataSources.classesAPI.getCalledClasses.load(parent.class_id)
    }

}

module.exports = registryResolver
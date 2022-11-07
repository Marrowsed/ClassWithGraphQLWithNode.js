const registrySchema = require('./schema/registry.graphql')
const registryResolver = require('./resolvers/registryResolvers')
const RegistriesAPI = require('./datasource/registries.js')

module.exports = {
    registrySchema,
    registryResolver,
    RegistriesAPI
}
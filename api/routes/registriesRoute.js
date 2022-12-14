const {Router} = require('express')
const RegistriesController = require('../controller/RegistriesController')

const router = Router()
router
    .get('/registries', RegistriesController.getRegistries)
    .get('/registries/:id', RegistriesController.getRegistriesId)
    .get('/registries/class/:classid', RegistriesController.getRegistriesByClass)
    .get('/registries/users/:userid', RegistriesController.getRegistriesByUser)
    .post('/registries', RegistriesController.postRegistries)
    .delete('/registries/:id', RegistriesController.deleteRegistries)
    .put('/registries/:id', RegistriesController.updateRegistries)

module.exports = router
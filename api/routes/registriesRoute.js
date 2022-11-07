const {Router} = require('express')
const RegistriesController = require('../controller/RegistriesController')

const router = Router()
router
    .get('/registries', RegistriesController.getRegistries)
    .get('/registries/:id', RegistriesController.getRegistriesId)
    .get('/registries/:id/class', RegistriesController.getRegistriesByClass)
    .post('/registries', RegistriesController.postRegistries)
    .delete('/registries/:id', RegistriesController.deleteRegistries)
    .put('/registries/:id', RegistriesController.updateRegistries)

module.exports = router
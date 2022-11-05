const {Router} = require('express')
const RoleController = require('../controller/RolesController')

const router = Router()
router
    .get('/roles', RoleController.getRoles)
    .get('/roles/:id', RoleController.getRolesId)
    .post('/roles', RoleController.postRoles)
    .delete('/roles/:id', RoleController.deleteRoles)
    .put('/roles/:id', RoleController.updateRoles)

module.exports = router
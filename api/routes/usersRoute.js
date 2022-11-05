const {Router} = require('express')
const UserController = require('../controller/UsersController')

const router = Router()
router
    .get('/users', UserController.getUsers)
    .get('/users/:id', UserController.getUsersId)
    .post('/users', UserController.postUsers)
    .delete('/users/:id', UserController.deleteUsers)
    .put('/users/:id', UserController.updateUsers)

module.exports = router
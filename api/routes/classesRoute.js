const {Router} = require('express')
const ClassesController = require('../controller/ClassesController')

const router = Router()
router
    .get('/classes', ClassesController.getClasses)
    .get('/classes/:id', ClassesController.getClassesId)
    .post('/classes', ClassesController.postClasses)
    .delete('/classes/:id', ClassesController.deleteClasses)
    .put('/classes/:id', ClassesController.updateClasses)

module.exports = router
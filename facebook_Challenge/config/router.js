
const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')


router.get('/feed', controller.gethomepage)

router.all('/new/post', controller.createNewPost)

router.get('/feed/:id', controller.showOnePost)

router.all('/feed/edit/:id', controller.updateOnePost)

router.all('/delete-post/:id', controller.deleteOnePost)

module.exports = router
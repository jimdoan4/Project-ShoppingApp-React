const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const clothController = require('../controllers/clothController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/', clothController.index)
router.post('/', clothController.create)
router.get('/clothes/:id', clothController.show)
router.put('/clothes/:id', clothController.update)
router.delete('/:id', clothController.delete)

module.exports = router
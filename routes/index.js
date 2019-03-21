const express = require('express')
const router = express.Router()
const frontController = require('../controllers/frontController')
const userController = require('../controllers/userController')
const clothController = require('../controllers/clothController')

router.get('/front', frontController.index)

router.get('/clothes', clothController.index)
router.post('/clothes', clothController.create)
router.get('//:clothid', clothController.show)
router.put('/clothes/:clothid', clothController.update)
router.delete('/clothes/:clothid', clothController.delete)

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/:userid', userController.show)
router.put('/:userid', userController.update)
router.delete('/users/:userid', userController.delete)

module.exports = router
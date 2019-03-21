const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const clothController = require('../controllers/clothController');
const aboutController = require('../controllers/aboutController');
const fitnessController = require('../controllers/fitnessController');
const shopController = require('../controllers/shopController');

router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/fitness', fitnessController.index);
router.get('/shop', shopController.index);

router.get('/clothes', clothController.index);
router.post('/clothes', clothController.create);
router.get('/:clothid', clothController.show);
router.put('/clothes/:clothid', clothController.update);
router.delete('/clothes/:clothid', clothController.delete);

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:userid', userController.show);
router.put('/users/:userid', userController.update);
router.delete('/users/:userid', userController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const clothController = require('../controllers/clothController');
// const aboutController = require('../controllers/aboutController');
// const fitnessController = require('../controllers/fitnessController');
// const shopController = require('../controllers/shopController');
// const menController = require('../controllers/menController');

router.get('/', homeController.index);
// router.get('/about', aboutController.index);
// router.get('/fitness', fitnessController.index);
// router.get('/shop', shopController.index);
// router.get('/men', menController.index);

// router.get('/clothes', clothController.index);
// router.post('/clothes', clothController.create);
// router.get('/:clothId', clothController.show);
// router.put('/clothes/:clothId', clothController.update);
// router.delete('/clothes/:clothId', clothController.delete);

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/:userId', userController.show);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.delete);

module.exports = router;

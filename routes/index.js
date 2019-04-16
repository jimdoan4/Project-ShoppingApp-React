const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const apparelController = require('../controllers/apparelController');
const userController = require('../controllers/userController');
const reviewController = require('../controllers/reviewController');

router.get('/', appController.index);

router.get('/apparels/:apparelId/reviews', reviewController.index);
router.post('/apparels/:apparelId/reviews', reviewController.create);
router.get('/apparels/:apparelId/reviews/:reviewId', reviewController.show);
router.put('/apparels/:apparelId/reviews/:reviewId', reviewController.update);
router.delete('/apparels/:apparelId/reviews/:reviewId', reviewController.delete);

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:userId', userController.show);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.delete);

router.get('/apparels', apparelController.index);
router.post('/apparels', apparelController.create);
router.get('/apparels/:apparelId', apparelController.show);
router.put('/apparels/:apparelId', apparelController.update);
router.delete('/apparels/:apparelId', apparelController.delete);



module.exports = router;

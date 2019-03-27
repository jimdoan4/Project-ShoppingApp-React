const express = require('express');
const router = express.Router();
const apparelController = require('../controllers/apparelController');
// const reviewController = require('../controllers/reviewController');

router.get('/', apparelController.index);
router.post('/', apparelController.create);
router.get('/:apparelId', apparelController.show);
router.put('/apparels/:apparelId', apparelController.update);
router.delete('/apparels/:apparelId', apparelController.delete);

// router.get('/reviews', reviewController.index);
// router.post('/reviews', reviewController.create);
// router.get('/:apparelId/review', reviewController.show);
// router.put('/apparels/:apparelId/review', reviewController.update);
// router.delete('/apparels/:apparelId/review', reviewController.delete);

module.exports = router;

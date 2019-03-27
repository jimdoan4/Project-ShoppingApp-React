const express = require('express');
const router = express.Router();
const apparelController = require('../controllers/apparelController');

router.get('/', apparelController.index);
router.post('/', apparelController.create);
router.get('/:apparelId', apparelController.show);
router.put('/apparels/:apparelId', apparelController.update);
router.delete('/apparels/:apparelId', apparelController.delete);

module.exports = router;

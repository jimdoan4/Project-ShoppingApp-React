# const express = require('express');
# const router = express.Router();
# // const userController = require('../controllers/userController');
# const apparelController = require('../controllers/apparelController');

# // router.get('/clothes', clothController.index);
# // router.post('/clothes', clothController.create);
# // router.get('/:clothId', clothController.show);
# // router.put('/clothes/:clothId', clothController.update);
# // router.delete('/clothes/:clothId', clothController.delete);

# // router.get('/users', userController.index);
# // router.post('/users', userController.create);
# // router.get('/:userId', userController.show);
# // router.put('/users/:userId', userController.update);
# // router.delete('/users/:userId', userController.delete);

# router.get('/apparels', apparelController.index);
# router.post('/apparels', apparelController.create);
# router.get('/:apparelId', apparelController.show);
# router.put('/apparels/:apparelId', apparelController.update);
# router.delete('/apparels/:apparelId', apparelController.delete);

# module.exports = router;

const express = require('express');
const MainController = require('../controllers/mainController');

const router = express.Router();

router.get('/alljsons', MainController.getalljsoins)

module.exports = router;
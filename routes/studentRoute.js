const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

router.post('/create', StudentController.createStudent)

module.exports = router;
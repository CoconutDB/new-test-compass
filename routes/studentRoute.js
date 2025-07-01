const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

router.post('/create', StudentController.createStudent)

router.get('/get-allstds', StudentController.getallstudents)

module.exports = router;
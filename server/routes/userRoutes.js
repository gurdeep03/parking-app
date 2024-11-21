const express = require('express');
const {signup,login} = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;
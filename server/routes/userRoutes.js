const express = require('express');
const {SignUp,LoginUser} = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/signup', SignUp);
router.post('/login', LoginUser);


module.exports = router;
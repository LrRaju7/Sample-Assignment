//IMPORTING FILES
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', userController.createUser);

// @route    GET api/users/me
// @desc     Get current users profile
// @access   Private
router.get('/me', authController.authenticate, userController.getMyProfile);



module.exports = router;
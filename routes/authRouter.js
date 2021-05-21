//IMPORTING FILES
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/',authController.authenticate, userController.getMyProfile);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', authController.loginUser);

module.exports = router;
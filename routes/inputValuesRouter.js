//IMPORTING FILES
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const InputValuesController = require('../controllers/inputValuesControllers');

// @route    POST api/inputs
// @desc     Save Input
// @access   Public
router.post('/', InputValuesController.createInput);

// @route    GET api/inputs
// @desc     Get all inputs
// @access   Public
router.get('/', InputValuesController.getAllInputs);



module.exports = router;
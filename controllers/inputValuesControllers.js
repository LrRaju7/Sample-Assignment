//IMPORTING FILES
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const InputValues = require('../models/inputValuesModel');


//REQUEST ADD NEW SEQUENCE INPUT
exports.createInput = catchAsync(async (req, res, next) => {

  //COLLECTING DATA FROM FRONTEND
  const { sequence } = req.body;

  //CHECKING IF THE GIVEN SEQUENCE EXISTS
  let inputValue = await InputValues.findOne({ sequence });

  //IF THE SEQUENCE EXISTS THEN SENDING ERROR
  if (inputValue) {
    return next(new AppError('INPUT VALUE Exists', 400));
  }

  const input = new InputValues({
    sequence,
  });

  //SAVING NEW SEQUENCE
  const newInput = await InputValues.create(input);
  res.status(201).json({ input: newInput });
});


//REQUEST GETTING ALL SEQUENCE INPUTS
exports.getAllInputs = catchAsync(async (req, res, next) => {
    await InputValues.find()
    .then(inputValue => res.json(inputValue))
    .catch(err => res.status(400).json(`Error : ${err}`));
  
  });
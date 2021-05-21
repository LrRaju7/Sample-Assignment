//IMPORTING PACKAGES
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//IMPORTING FILES
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('../models/userModel');


//REQUEST NEW USER REGISTRATION
exports.createUser = catchAsync(async (req, res, next) => {

  //COLLECTING DATA FROM FRONTEND
  const { name, email, password,location, phone} = req.body;

  //CHECKING THE GIVEN INFORMATION
  if (!(name && email && password)) {
    return next(new AppError('Missing required fields', 400));
  }

  //CHECKING IF THE GIVEN EMAIL EXISTS
  let user = await User.findOne({ email });

  //IF THE EMAIL IS ALREADY USED THEN SENDING ERROR
  if (user) {
    return next(new AppError('Email is already in use', 400));
  }

  //CREATING NEW USER
  user = new User({
    name,
    email,
    password,
    location,
    phone,
  });

  //SOLTING THE PASSWORD
  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(password, salt);

  //SAVING NEW USER
  await user.save();

  const payload = {
    user: {
      id: user.id
    }
  };

  //GENERATING JSON WEB TOKEN
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 360000 },
    (err, token) => {
      if (err) throw err;
      res.json({ ...user._doc, token });
    }
  );
});



//REQUEST GETTING USER PROFILE
exports.getMyProfile = catchAsync(async (req, res, next) => {
  const profile = await User.findById(req.user.id).select('-password');
  if (!profile) {
    return next(new AppError('There is no profile for this user', 404));
  }

  res.json(profile);
});
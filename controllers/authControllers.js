//IMPORTING PACKAGES
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//IMPORTING FILES
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');
const dotenv = require('dotenv').config({ path: './../config.env' });

//USER LOGIN
exports.loginUser = catchAsync(async (req, res, next) => {
  //COLLECTING DATA FROM FRONTEND
  const { email, password } = req.body;

  //CHECKING THE GIVEN INFORMATION
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  //FINDING THE USER BASED ON GIVEN INFORMATION
  let user = await User.findOne({ email });

  //CHECKING IF USER EXISTS
  if (!user) {
    return next(new AppError('Incorrect email or password', 401));
  }

  //PASSWORD MATCHING
  const isMatch = await bcrypt.compare(password, user.password);

  //CHECKING MATCH RESULT
  if (!isMatch) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const payload = {
    user: {
      id: user._id
    }
  };

  //GENERATING JSON WEB TOKEN
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 360000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
  console.log(token)
});


exports.authenticate = catchAsync(async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return next(new AppError('No token, authorization denied', 401));
  }

  // Verify token
  await jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return next(new AppError('Token is not valid', 401));
    } else {
      req.user = decoded.user;
      next();
    }
  });
});


exports.checkUser = catchAsync(async (req, res, next) => {
  let user = await User.findById(req.user.id)
  next()
})
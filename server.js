//IMPORTING PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//IMPORTING FILES
const userRoutersUrls = require('./routes/userRouter');
const authRoutersUrls = require('./routes/authRouter');
const inputValuesRoutersUrls = require('./routes/inputValuesRouter');

//INITIALIZING
const app = express();

//DATABASE CONFIG AND CONNECTION
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('DB connected successfully'))

//DEFINING APP ROUTES
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutersUrls);
app.use("/api/auth", authRoutersUrls);
app.use("/api/inputs", inputValuesRoutersUrls);

//CONFIGURING THE PORT AND START THE SERVER
app.listen(4000, () => console.log('server is running on port: 4000'))
require('dotenv').config();
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const userRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT | 5000;


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/users', userRouter);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(PORT, () => console.log("Server running on port " + PORT));
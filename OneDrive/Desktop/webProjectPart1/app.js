const mongoose = require("mongoose");


const dotenv = require("dotenv").config({ path: ".dotenv" });
const express = require("express");
const restaurant= require('./routes/restaurant')
const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });




app.use('/restaurant', restaurant);




const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(express.json());



app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error while connecting to MongoDB Atlas: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB Atlas");
});

app.use(express.urlencoded({ extended: false }));




app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
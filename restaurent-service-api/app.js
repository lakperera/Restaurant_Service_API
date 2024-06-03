const mongoose=require("mongoose")
const express = require('express')
const cors = require("cors")
const path  = require("path")
const bodyParser = require("body-parser");
const restaurant = require("./routes/restaurant.js");

const app = express()

app.use(express.json())
app.use(cors())
// app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(bodyParser.json());

app.use("/api/restaurants", restaurant);

module.exports = app;

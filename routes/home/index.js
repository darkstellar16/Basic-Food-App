const express = require("express");

const route = express.Router();

const homeData = require("../../controller/home/index.js");


route.get('/', homeData)



module.exports = route;

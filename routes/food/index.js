
const express = require("express");


const route = express.Router();
const foodData=require("../../controller/food/index.js");

route.post('/', foodData)


module.exports = route;
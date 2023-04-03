const express = require('express');

const route = express.Router();


const food = require('./food/index.js');
const home = require('./home/index.js');

route.use('/food', food);
route.use('/', home);

module.exports = route;

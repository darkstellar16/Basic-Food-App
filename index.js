const express = require('express');

const bodyParser = require("body-parser");

const foodConnection=require("./config/db.js")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

foodConnection();

const path = require('path');

// const staicPath = path.join(__dirname, '/public');




app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.set('views','../views');

const main = require("./routes/index.js");

app.use('/', main);

app.listen(8000, () => {
    console.log("Server Running");
})






const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    food: String
})


const recipie = mongoose.model("foodname", dataSchema);


module.exports = recipie;
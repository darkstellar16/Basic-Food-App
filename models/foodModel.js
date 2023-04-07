const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    }
})


const recipie = mongoose.model("foodname", dataSchema);


module.exports = recipie;
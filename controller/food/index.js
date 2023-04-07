
const recipie = require("../../models/foodModel.js");


const foodData = (req, res) => {
    // console.log(req.body);  

    const food = new recipie({
        name: req.body.name,
        email: req.body.email,
        food: req.body.food
    })
    food.save();
    res.redirect("/food");
}

module.exports = foodData;

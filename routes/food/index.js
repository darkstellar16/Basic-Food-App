
const express = require("express");

const recipie = require("../../models/foodModel.js");
// const myfood = require("../../models/foodModel.js")

const route = express.Router();



const foodData = require("../../controller/food/index.js");

route.post('/', foodData)

route.get('/', (req, res) => {

  try {
    async function getall() {
      const dataInfo = await recipie.find();
      // console.log(dataInfo);
      res.render('food', { data: dataInfo });
    }
    getall();
  }
  catch (error) {
    console.log(error);
  }
})

route.get('/:id', (req, res) => {

  const id = req.params.id;
  console.log(id);

  recipie.deleteOne({ _id: id }).then(function () {
    res.redirect('/food');
    console.log("Blog deleted"); // Success
  }).catch(function (error) {
    console.log(error); // Failure
  });
})

module.exports = route;

const recipie = require("../../models/foodModel.js");
const myfood = require("../../models/foodModel.js")

const foodData = (req, res) => {
    // console.log(req.body);

    const food = new myfood({
        name: req.body.name,
        email: req.body.email,
        food: req.body.food
    })
    food.save();

    // var foodInfo;
    try {
        async function getall() {
            const dataInfo = await recipie.find();
            // console.log(dataInfo);
            res.render('food',{data:dataInfo});
        }
        getall();
    }
    catch (error) {
        console.log(error);
    }    
}

module.exports = foodData;



// res.redirect('/home');
// recipie.deleteMany().then(()=>{
//     console.log("deleted")
// })
// .catch((error)=>{
//     console.log(error);
// })
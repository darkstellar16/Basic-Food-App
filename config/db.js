const mongoose = require('mongoose');

const url = "mongodb+srv://shubham:piyush@cluster0.5fvwczt.mongodb.net/?retryWrites=true&w=majority";

const Connection = async ()=>{
    try{
        mongoose.connect(url,{ useNewUrlParser: true })
        console.log('mongodb connected');
    }catch(err){
        console.log(err);
    }
}

module.exports = Connection;
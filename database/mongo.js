const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/myproject1").then(()=>{console.log("connected")})
const userschema = new mongoose.Schema(
    {
        name: String,
        email:String,
        password:String,

    }
)
//create collection
const collection = mongoose.model('users', userschema);
module.exports=collection



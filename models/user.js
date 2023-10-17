require("../config/db");
const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    fullname:String,
    username:String,
    password:String,
    address:String,
    contact:String,
    gender:String,
    city:String
   

})
module.exports=mongoose.model("user",userschema);
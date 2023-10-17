require("../config/db");
const mongoose=require("mongoose");
const ownerschema=mongoose.Schema({
    ownername:String,
    fullname:String,
    email:String,
    password:String,
    hotelname:String,
    address:String,
    contact:String,
    
    city:String
   

})
module.exports=mongoose.model("owner",ownerschema);
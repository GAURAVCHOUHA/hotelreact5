require("../config/db");
const mongoose=require("mongoose");
const studentschema=mongoose.Schema({
    
    name:String,
    age:String
    
   

})
module.exports=mongoose.model("student",studentschema);
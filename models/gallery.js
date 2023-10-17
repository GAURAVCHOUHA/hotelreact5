require("../config/db");
const mongoose=require("mongoose");
const galleryschema=mongoose.Schema({
   
    image:String
   
   

})
module.exports=mongoose.model("gallery",galleryschema);
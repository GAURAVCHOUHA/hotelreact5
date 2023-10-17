const routes=require("express").Router();
const user=require("../models/student");
routes.get("/", async(req,res)=>{
    let result=await user.find();
    res.send(result)
})
module.exports=routes;
const routes=require("express").Router();
const gallery=require("../models/gallery");
routes.get("/", async(req,res)=>{
    let result=await gallery.find();
    res.send(result)
})
module.exports=routes;
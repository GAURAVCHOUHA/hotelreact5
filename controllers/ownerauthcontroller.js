const routes=require("express").Router();
const owner=require("../models/owner");
const jwt=require("jsonwebtoken");
const sha1=require("sha1");
const {route}=require("../controllers/ownercontroller");
const key = require("../config/secreateKey");
routes.post("/",async(req,res)=>{
    let e=req.body.email;
    let p=req.body.password;
    let result=await owner.find({email:e});
    console.log(result)
    if(result.length>0){
        if(result[0].password==sha1(p)){
            let obj={_id:result[0]._id};
            let token=jwt.sign(obj,key,{expiresIn:'2d'});
           res.send({success:true,token:token,hotelname:result[0].hotelname});
        }else{
            res.send({success:false,errType:2});
        }
    }else{
        res.send({success:false,errType:1})
    }
})
module.exports=routes;
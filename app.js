const express=require("express");
const app=express();
const routes=require("./config/allroutes")
const cors=require("cors");
const root=require("path").join(__dirname,"build")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(root));
app.use(cors());

app.use(routes);
app.get("*",(req,res)=>{
    res.sendFile("index.html",{root})
})











const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log("server is run with port-",port);
})

// gchouhan942
// 31F8BEsh1j939VrC



require("mongoose").connect("mongodb://0.0.0.0:27017/tss12_project").then(()=>{
    console.log("data connected");
}).catch((err)=>{
    console.log("data not connected",err);
})
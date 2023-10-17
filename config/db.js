require("mongoose").connect("mongodb+srv://gchouhan942:31F8BEsh1j939VrC@cluster0.jsikn7b.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("data connected");
}).catch((err)=>{
    console.log("data not connected",err);
})



// require("mongoose").connect("mongodb://0.0.0.0:27017/tss12_project").then(()=>{
//     console.log("data connected");
// }).catch((err)=>{
//     console.log("data not connected",err);
// })







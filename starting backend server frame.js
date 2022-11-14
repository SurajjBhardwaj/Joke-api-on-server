const express=require("express");
const app=express();


app.get("/", function (req,res) {
    
res.send("heyyy..");

});


app.listen(4000,function () {
    
console.log("working");

});
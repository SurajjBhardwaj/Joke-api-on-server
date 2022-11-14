const { Console } = require("console");
const { json } = require("express");
const express=require("express");
const https=require("https");
const app=express();



app.get("/", function (req,res) {

    const url="https://v2.jokeapi.dev/joke/Programming?amount=2&type=single";
    https.get(url,function (response) {
    
   response.on("data",function (data) {
    
   const jokeapidata = JSON.parse(data);
   const category=jokeapidata.jokes[0].category;
   const joke=jokeapidata.jokes[0].joke;
   res.write("<h1> Refresh for new joke : </h1>");
   res.write("catory = "+category +"<br>");
   res.write(joke);

   res.send();
   
   console.log(joke);
   


   });     
        
    console.log(response.statusCode);
    
    
    });    
//res.send("heyy");

});


app.listen(4000,function () {
    
console.log("working");

});
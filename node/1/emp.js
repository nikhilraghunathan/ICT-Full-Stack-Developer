var express = require('express')
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/templates/login.html")
    // console.log(__dirname);
})

app.get("/home", function(req,res){
    res.sendFile(__dirname + "/templates/home.html")
})

app.get("/home/Employee",function(req,res){
    res.sendFile(__dirname + "/templates/empemployee.html")
})

app.get("/home/Products",function(req,res){
    res.sendFile(__dirname + "/templates/empproducts.html")
})

app.get("/home/Employee/NewEmp",function(req,res){
    res.sendFile(__dirname + "/templates/empnewemp.html")
})

app.get("/home/Employee/DeleteEmp",function(req,res){
    res.sendFile(__dirname + "/templates/empnewemp.html")
})

// ------------//
app.listen(8123,function(req,res){
    console.log("server started listening");
})

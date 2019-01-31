var express = require('express');
const app = express();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/nikdb";

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("home");
})

app.get("/insert",function(req,res){
    MongoClient.connect(url,function(err,database){
        var datab = database.db('nikdb');    //  connecting database to variable
        var collectn = datab.collection('employee1');        // linking table employee1 to variable 'collections'
        var data = {eid:"e0021",name:"RAMAN",dept:"it",salary:"11000",loc:"kkkk"};
        collectn.insert(data, function(err,result){
            if(err){ res.send("something went wrong"); }
            else{ res.send("data inserted successfully"); }
        })

    })

})

app.listen(8000,function(req,res){
    console.log("server is listening")
});
var express = require('express');
const app = express();
app.set('view engine', 'ejs');      //for ejs

var bodyparser = require('body-parser');        //for body parser
app.use(bodyparser.urlencoded({extended:true}));

const fileUpload = require('express-fileUpload');       //file upload
app.use(fileUpload());

var mongoose = require('mongoose');     //for mongoose
var db = "mongodb://localhost/books";
mongoose.connect(db,function(err){
    console.log(err);
})

var book = require("./model/book.js");

app.get("/",function(req,res){
    res.render("home");
})


app.listen(8000,function(req,res){
    console.log("server is listening");
});
var express = require('express');
var empRouter = require('./Routes/empRouter');
var proRouter = require('./Routes/proRouter');
const app = express();

app.set('view engine', 'ejs');

app.use("/emp",empRouter);
app.use("/pro",proRouter);

app.get("/",function(req,res){
    res.render("home");
})


app.listen(8000,function(req,res){
    console.log("server is listening")
})

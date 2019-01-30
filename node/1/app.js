// var test = function()
// {
//     console.log("hello")
// }
// test()

// ----------------------------------------------------------- //

var express = require('express')
const app = express();

app.get("/",function(req,res){
    res.sendfile("./home.html")
    // res.send("<html><body><h1><b>welcome to server</b></h1></body></html");
})

app.get("/login",function(x,y){
    y.sendfile("./login.html");
})

app.get("/employee",function(a,b){
    b.send("welcome to employees");    
})

app.listen(8123,function(req,res){
    console.log("server started listening");
})
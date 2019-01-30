var express = require('express');
const app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

var exp = require('./export');
app.get("/",function(req,res){
    res.render("login");
    exp.functionname();
})

app.post("/home",function(req,res){
    var uname = req.body.txtuname;
    var pass = req.body.txtpassword;
    if( pass == "password")
    {   res.sendFile(__dirname + "/templates/2home.html");    }
    else{   res.send("incorrect password");     }
    res.render("home",{
        user:uname
    })
})

app.post("/signup",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var phno = req.body.phno;
    res.render("signup", {
        username:username, password:password, email:email, phno:phno })
    })

//     res.send("<html><body> Username : "+username+           // printing directly
//     "</br> Password : "+password+
//     "</br> E-Mail ID : "+email+
//     "</br> Phone No. : "+phno+ 
//     "</body></html")
// })

// ---------------------------------------------------------//
app.listen(8000,function(req,res){
    console.log("server started listening");
})

var express = require('express');
const app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/templates/2login.html");
})

app.post("/2home",function(req,res){
    
    var uname = req.body.txtuname;
    var pass = req.body.txtpassword;
    if( pass == "password")
    {
        res.sendFile(__dirname + "/templates/2home.html");
    }
    else{
        res.send("incorrect password");
    }
    console.log(req.body.txtuname);
})

    app.post("/signup",function(req,res){
        var uname = req.body.txtuname;
        var pass = req.body.txtpassword;
        var email = req.body.txtemail;
        var phno = req.body.txtphno;
        res.send("<html><body> Username : "+uname+
        "<br/>Password : "+pass+
        "<br/>Email : "+email+
        "<br/>Phone no : "+phno+
        "</body></html>")
    })

// ------------------------------------------ //

app.listen(8000,function(req,res){
    console.log("server started listening");
})

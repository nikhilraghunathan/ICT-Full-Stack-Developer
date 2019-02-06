var express = require('express');
const app = express();
app.set('view engine', 'ejs');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

const fileUpload = require('express-fileUpload');
app.use(fileUpload());

var mongoose = require('mongoose');
var db = "mongodb://localhost/books";
mongoose.connect(db,function(err){
    console.log(err);
});

var book = require("./model/book.js");

app.post("/home",function(req,res){
    res.render("home",{name:req.body.name});
})

app.post("/insert",function(req,res){
    var b1 = new book();
    b1.id = req.body.txt_id;
    b1.name = req.body.txt_name;
    b1.author = req.body.txt_author;
    b1.publisher = req.body.txt_publisher;
    b1.price = req.body.txt_price;
    

    b1.save(function(err,result){
        if(err){ res.send(err); }
        else{ res.send("Data Inserted"); }
    })
})

app.post("/delete",function(req,res){
    

    book.deleteOne({id:req.body.txt_id},function(err){
        if(err){ res.send(err); }
        else{ res.send("Deleted"); }
    });

})

app.post("/view",function(req,res){
    book.find({name:req.body.txt_name},function(err,result){
        if(err){ res.send(err); }
        else{ res.render('view',{data:result}); }
    })
})

app.post("/update",function(req,res){
    book.findOne({id:req.body.txt_id},function(err,editData){
        editData.name = "eeeeeeeee";
        editData.author = "aaaaaa";
        editData.save();
        if(err){ res.send(err); }
        else{ res.send("Updated"); }
    })
})

app.post("/upload",function(req,res){
        let sampleFile = req.files.img;
        sampleFile.mv(__dirname+"/Images/"+sampleFile.name,function(err){
            if(err){ res.send("Erroooor"); }
            else{ res.send("Uploaded"); }
        })
})

app.get("/",function(req,res){
    res.render("login");
})

app.listen(8000,function(req,res){
    console.log("server is listening");
});
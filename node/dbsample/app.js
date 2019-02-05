var express = require('express');
const app = express();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/nikdb";

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("home");
})
// ---------------------------------------------------------------------------------------------------------------------- //
app.post("/insert",function(req,res){
    MongoClient.connect(url,function(err,database){
        var txtname = req.body.name;
        var txtsal = req.body.salary;

        // res.send(txtname);

        var datab = database.db('nikdb');    //  connecting database to variable
        var collectn = datab.collection('employee1');        // linking table employee1 to variable 'collections'
        var data = {eid:"e007",ename:txtname,dept:"it",salary:txtsal,loc:"kkkk"};

        collectn.insert(data, function(err,result){
            if(err){ res.send("something went wrong"); }
            else{ res.send("data inserted successfully"); }
        })

    })

})
// ---------------------------------------------------------------------------------------------------------------------- //
app.get("/view",function(req,res){
    MongoClient.connect(url,function(err,database) {
        if(err){ res.send("something went wrong"); }
        else{
            var datab = database.db("nikdb");
            var collectn = datab.collection("employee1");
            collectn.find().toArray(function(err,tbdata){
                if(err){ res.send("Error"); }
                else{  res.render('empview',{data:tbdata}); }
            })
        }
    })
})
// ---------------------------------------------------------------------------------------------------------------------- //

app.get("/delete",function(req,res){
    MongoClient.connect(url,function(err,database) {
        if(err){ res.send("something went wrong"); }
        else{
            var datab = database.db("nikdb");
            var collectn = datab.collection("employee1");
            collectn.find().toArray(function(err,tbdata){
                if(err){ res.send("Error"); }
                else{  res.render('empdelete',{data:tbdata}); }
            })
        }
    })
})
// ---------------------------------------------------------------------------------------------------------------------- //
        app.post("/deleted",function(req,res){
            MongoClient.connect(url,function(err,database) {
                if(err){ res.send("something went wrong"); }
                else{
                    var enamee = req.body.employ;
                    if(enamee== '')
                    { enamee=null; }
                    var datab = database.db("nikdb");
                    var collectn = datab.collection("employee1");
                    var query = {ename:enamee };
                    collectn.remove(query,function(err,obj){
                        if(err){ throw err; }
                        else{  res.send("Employee deleted"); }
                    })
                }
            })
        })

// ---------------------------------------------------------------------------------------------------------------------- //

app.get("/edit",function(req,res){
    MongoClient.connect(url,function(err,database) {
        if(err){ res.send("something went wrong"); }
        else{
            var datab = database.db("nikdb");
            var collectn = datab.collection("employee1");
            collectn.find().toArray(function(err,tbdata){
                if(err){ res.send("Error"); }
                else{  res.render('empedit',{data:tbdata}); }
            })
        }
    })
})
// ---------------------------------------------------------------------------------------------------------------------- //
        app.post("/editing",function(req,res){
            MongoClient.connect(url,function(err,database) {
                var enamee = req.body.employedit;
                var query = {ename:enamee };
                if(err){ res.send("something went wrong"); }
                else{
                    var datab = database.db("nikdb");
                    var collectn = datab.collection("employee1");
                    collectn.find(query).toArray(function(err,tbdata){
                        if(err){ res.send("Error"); }
                        else{  res.render('empedit1',{data:tbdata}); }
                    })
                }
            })
        })

// ---------------------------------------------------------------------------------------------------------------------- //
        app.post("/edited",function(req,res){
            MongoClient.connect(url,function(err,database) {
                var b_eid = req.body.a_eid;
                var b_ename = req.body.a_ename;
                var b_dept = req.body.a_dept;
                var b_salary = req.body.a_salary;
                var b_loc = req.body.a_loc;
                var b_dob = req.body.a_dob;

                var the_id = {eid:b_eid};
                var values = {$set:{ename:b_ename,dept:b_dept,salary:b_salary,loc:b_loc,dob:b_dob}};
                
                if(err){ res.send("something went wrong"); }
                else{
                    var datab = database.db("nikdb");
                    var collectn = datab.collection("employee1");

                    collectn.updateOne(the_id, values, function(err,result){
                        if(err){ res.send("Error"); }
                        else{ res.send("Data updated successfully"); }
                    })
                }
            })
        })

// ---------------------------------------------------------------------------------------------------------------------- //
app.listen(8000,function(req,res){
    console.log("server is listening");
});
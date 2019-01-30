var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.render("empHome");
})
// -------------------------------------------------//
router.get("/new",function(req,res){
    res.render("empNew");
})

    router.get("/new/temp",function(req,res){
        res.render("empTemp");
    })
    router.get("/new/perm",function(req,res){
        res.render("empPerm");
    })
// -------------------------------------------------//
router.get("/edit",function(req,res){
    res.render("empEdit");
})

router.get("/delete",function(req,res){
    res.render("empDelete");
})
// -------------------------------------------------//

module.exports = router;
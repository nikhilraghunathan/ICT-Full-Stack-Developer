var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.render("proHome")
})
// -------------------------------------------------//
router.get("/Scanner",function(req,res){
    res.render("proScanner")
})
    router.get("/Scanner/new",function(req,res){
        res.render("newScanner");
    })
    router.get("/Scanner/view",function(req,res){
        res.render("viewScanner");
    })
// -------------------------------------------------//
router.get("/Printer",function(req,res){
    res.render("proPrinter")
})
    router.get("/Printer/new",function(req,res){
        res.render("newPrinter");
    })
    router.get("/Printer/view",function(req,res){
        res.render("viewPrinter");
    })
// -------------------------------------------------//
module.exports = router;
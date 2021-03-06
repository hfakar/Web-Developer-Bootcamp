var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds")

router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(error, campgrounds){
        if(error){
            console.log(error);
        }else{
         res.render("campgrounds/index", {campgrounds:campgrounds});
        }
    })
     
 });
 
 router.post("/", function(req, res){
     //get data from q
     // res.send("You hit the post route!");
     var name = req.body.name;
     var image = req.body.image;
     var desc = req.body.description;
     var newCampground = {name: name, image: image, description: desc};
     // campgrounds.push(newCampground);
 
     Campground.create(newCampground, function(err, newlyCreated){
         if(err){
             console.log(err);
         }else{
             res.redirect("/campgrounds");
         }
     })
     // res.redirect("/campgrounds");
 });
 
 router.get("/new", function(req, res){
     res.render("campgrounds/new.ejs");
 });
 
 router.get("/:id", function(req, res){
     Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
         if(err){
             console.log(err);
         }else{
             res.render("campgrounds/show", {campground: foundCampground});
         }
     });
     // res.render("show");
 });
 function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

 module.exports = router;
var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");


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
 
 router.post("/", middleware.isLoggedIn, function(req, res){
     //get data from q
     // res.send("You hit the post route!");
     var name = req.body.name;
     var image = req.body.image;
     var desc = req.body.description;
     var author = {
         id: req.user._id,
         username: req.user.username
     }
     var newCampground = {name: name, image: image, description: desc, author: author};
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
 
 router.get("/new", middleware.isLoggedIn, function(req, res){
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

//EDIT CampGround Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){  
    Campground.findById(req.params.id, function(err, foundCampground){            
        res.render("campgrounds/edit", {campground: foundCampground}); 
    });   
});


router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //find and update the correct campground
        Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
            if(err){
                res.redirect("/campgrounds");
            }else{
                res.redirect("/campgrounds/" + req.params.id);
            }
        });
    //redirect  somewhere(show page)
});
//Update Campground Route


//destroy campground route

router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
     });
  });

 module.exports = router;
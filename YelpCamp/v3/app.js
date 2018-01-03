var express    = require("express");
var app        = express();
var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campgrounds"),
    seedDB     = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v3");



app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
   // Get all campgrounds from DB
   Campground.find({}, function(error, campgrounds){
       if(error){
           console.log(error);
       }else{
        res.render("index", {campgrounds:campgrounds});
       }
   })
    
});

app.post("/campgrounds", function(req, res){
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

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
    // res.render("show");
});

app.listen(9090);


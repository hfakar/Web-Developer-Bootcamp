var express =  require("express");
var app = express();
var bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

///SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {name: "Granite Hill", image:"http://www.colorado.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg", description: "This is a huge granite hill, No water beautiful grains."}, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly Created Campground");
//             console.log(campground);
//         }
//     }
// );


var campgrounds = [
    {name: "Agri Dagi", image:"http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011-300x225.jpg"},
    {name: "Granite Hill", image:"http://www.colorado.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg"},
    {name: "Mountain Goat's Rest", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWinYz_EwpHpA1fvd_t0gjsanrwFgTjCJX15bgnuj2wYYEfTH"},
    {name: "Agri Dagi", image:"http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011-300x225.jpg"},
    {name: "Granite Hill", image:"http://www.colorado.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg"},
    {name: "Mountain Goat's Rest", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWinYz_EwpHpA1fvd_t0gjsanrwFgTjCJX15bgnuj2wYYEfTH"},
    {name: "Agri Dagi", image:"http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011-300x225.jpg"},
    {name: "Granite Hill", image:"http://www.colorado.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg"},
    {name: "Mountain Goat's Rest", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWinYz_EwpHpA1fvd_t0gjsanrwFgTjCJX15bgnuj2wYYEfTH"}

];

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
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
    // res.render("show");
});

app.listen(9090);


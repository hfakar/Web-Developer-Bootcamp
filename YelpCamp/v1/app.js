var express =  require("express");
var app = express();
var bodyParser = require("body-parser");

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
   
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from q
    // res.send("You hit the post route!");
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(9090);


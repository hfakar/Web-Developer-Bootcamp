var express    = require("express");
var app        = express();
var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campgrounds"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seeds"),
    LocalStrategy = require("passport-local"),
    User       = require("./models/user"),
    passport   = require("passport");
var methodOverride = require("method-override");
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");
    flash = require("connect-flash")

mongoose.connect("mongodb://localhost/yelp_camp_v6");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));//seed the database
app.use(flash());
// seedDB();



//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "once again rusty wins cutest dog!",
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error =  req.flash("error");
    res.locals.success =  req.flash("success");
    next();
})

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(9090);

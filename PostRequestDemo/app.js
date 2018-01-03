var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["tony", "miranda", "ahmet", "keke", "zalim"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home.ejs");
});


app.get("/friends", function(req, res){
    res.render("friends.ejs", {friends:friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});


app.listen(9090);

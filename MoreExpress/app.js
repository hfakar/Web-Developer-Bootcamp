var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("eks.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){

    var posts = [
        {title: "Post 1", author:"Sussy"},
        {title: "My adroable pet bunny 1", author:"Charlie"},
        {title: "Dinner is ready 1", author:"Mom"},
    ]
    res.render("posts.ejs", {posts:posts});
});

app.listen(9090);
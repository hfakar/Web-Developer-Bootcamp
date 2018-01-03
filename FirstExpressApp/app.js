var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});


app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("hav hav!");
});


app.get("/repeat/:text/:times", function(req, res){
    var sN = req.params.subName;
    if(req.params.text){
        var text = req.params.text;
    }
    var x = "";
    console.log(req.params.times);
    var babb = parseInt(req.params.times, 10);
    console.log(babb);
    for(var i = 0; i < babb ; i++){
        x = x + req.params.text + " "
        
    }
    res.send(x);
    console.log(req.params);
});

app.listen(9090);
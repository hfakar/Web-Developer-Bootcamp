var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest",
        image: "http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011-300x225.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore amet pariatur reiciendis! Voluptatem, tempora dolores perspiciatis obcaecati sunt illo error dicta animi numquam, consequatur cumque quod non natus fugiat."
    },
    {
        name: "Desert Mesa",
        image: "http://www.colorado.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg",
        description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore amet pariatur reiciendis! Voluptatem, tempora dolores perspiciatis obcaecati sunt illo error dicta animi numquam, consequatur cumque quod non natus fugiat."
    },
    {
        name: "Canyon Floor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWinYz_EwpHpA1fvd_t0gjsanrwFgTjCJX15bgnuj2wYYEfTH",
        description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore amet pariatur reiciendis! Voluptatem, tempora dolores perspiciatis obcaecati sunt illo error dicta animi numquam, consequatur cumque quod non natus fugiat."
    }
]
function seedDB(){
    //Remove All campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log(campground);
        //             Comment.create(
        //                 {
        //                     text:"This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     }else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Comment created.");
        //                     }                               
        //                 });
        //         }
        //     })
        // })
    });

    //add a few campgrounds    
}
module.exports = seedDB;
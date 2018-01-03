var mongoose = require("mongoose");
///SCHEMA SETUP
var Schema = mongoose.Schema;
var campgroundSchema = new Schema({
    name: String,
    image: String,
    description: String,
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, { usePushEach: true });

module.exports = mongoose.model("Campground", campgroundSchema);
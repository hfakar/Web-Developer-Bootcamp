var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
 text: String,
 author: String
}, { usePushEach: true });

module.exports = mongoose.model("Comment", commentSchema);
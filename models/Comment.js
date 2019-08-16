const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  commenterId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  storyId: {
    type: Schema.Types.ObjectId,
    ref: "stories",
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);




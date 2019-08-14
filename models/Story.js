const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  body: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = Story = mongoose.model("story", StorySchema);

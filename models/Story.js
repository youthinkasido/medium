const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  author_id: {
    type: Number,
    ref: "users"
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
    default: Date.now
  }
});

module.exports = Story = mongoose.model("story", StorySchema);

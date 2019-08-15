const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followerIds: [
    {
      type: Schema.ObjectId,
      ref: "users"
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});
//statics called on classes, methods called on instances.

module.exports = User = mongoose.model("users", UserSchema);

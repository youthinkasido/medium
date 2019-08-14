const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user database schema

// says that each user should have a handle, email, password
const UserSchema = new Schema({
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

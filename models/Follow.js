const mongoose = require("mongoose"); //required to make models
const Schema = mongoose.Schema; // allows schema creation 


// follower_id, followee_id

// user database schema

// says that each user should have a handle, email, password
const FollowSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  followee: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Follow = mongoose.model("follows", FollowSchema);




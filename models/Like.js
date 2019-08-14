const mongoose = require("mongoose"); //required to make models
const Schema = mongoose.Schema; // allows schema creation

const LikeSchema = new Schema({
    liker: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    likedStory: {
        type: Schema.Types.ObjectId,
        ref: "stories"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Like = mongoose.model("likes", LikeSchema);
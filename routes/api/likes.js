const express = require("express");
const router = express.Router();
const passport = require('passport');
const Like = require("../../models/Like");
const User = require("../../models/User");



router.post("/", (req, res) => {
  const newLike = new Like({
    liker: req.body.liker, // liker is an id
    likedStory: req.body.likedStory // likedStory is an id
  });

  newLike
    .save()
    .then(like => res.json(like).catch(err => console.log(err)));

  Story.findById(req.body.likedStory).then(story => {
    story
      .update({ $push: { likerIds: req.body.liker } })
      .then(story => {
        res.json("Story updated!");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

router.delete("/", (req, res) => {
  ////delete controller

  Like.findOne({
    liker: req.body.liker,
    likedStory: req.body.likedStory
  }).then(like => {
    like.remove(); // finds like object based on axios req body and deletes the like from the db
  });

  Story.findById(req.body.likedStory).then(story => {
    // find the followee, and update their likerIds based on the axios req
    story
      .update({ $pull: { likerIds: req.body.liker } }) // remove the liker id from the story
      .then(story => {
        res.json("Story updated!"); // give back json response to the user
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

module.exports = router;

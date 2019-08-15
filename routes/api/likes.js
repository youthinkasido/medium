const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Like = require("../../models/Like");
const Story = require("../../models/Story");
const router = express.Router();

router.patch("/like", (req, res) => {
  Story.findById(req.body.likedStory).then(story => { // find a story based on liked story id passed in req.body
    story.likerIds.push(req.body.liker); // add the liker's id to the found story
    story.save(function (err, story) { // save the 
      if (err) {
        console.log(err);
      }
    });
    res.send(story);
  });
});

router.patch("/unlike", (req, res) => {
  Story.findById(req.body.likedStory).then(story => {
    for (let index = 0; index < story.likerIds.length; index++) {
      const element = story.likerIds[index];
      if (element == req.body.liker) {
        story.likerIds.splice(index, 1);
      }
    }

    story.save(function (err, story) {
      if (err) {
        console.log(err);
      }
    });

    res.send(story);
  });
});

module.exports = router;
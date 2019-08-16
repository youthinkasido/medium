const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Story = require("../../models/Story");
const Comment = require("../../models/Comment");
const validateStoryInput = require("../../validation/stories");

router.get("/", (req, res) => {
  Story.find()
    .sort({ date: -1 })
    .then(stories => {
      res.json(stories);
    })
    .catch(err => res.status(404).json({ nostoriesfound: "No stories found" }));
});

router.get("/:storyId", (req, res) => {
  Story.findById(req.params.storyId)
    .then(story => {
      res.json(story);
    })
    .catch(err => res.status(404).json({ nostoryfound: "No Story found" }));
});

router.get("/:storyId/comments", (req, res) => {
  Comment.find({ storyId: req.params.storyId })
    .then(comments => {
      res.json(comments);
    })
    .catch(err =>
      res.status(404).json({ nocommentsfound: "No Comments found" })
    );
});

// router.get("/user/:user_id", (req, res) => {
//   Story.find({ user: req.params.user_id })
//     .sort({ date: -1 })
//     .then(stories => res.json(stories))
//     .catch(err =>
//       res.status(404).json({ nostoriesfound: "No stories found from that user" })
//     );
// });

// router.get("/:id", (req, res) => {
//   Story.findById(req.params.id)
//     .then(story => res.json(story))
//     .catch(err =>
//       res.status(404).json({ nostoryfound: "No story found with that ID" })
//     );
// });

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateStoryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newStory = new Story({
      body: req.body.body,
      authorId: req.body.authorId,
      title: req.body.title
    });

    // newStory.save().then(story => {
    //   res.json(story);
    // });

    try {
      let createdStory = await newStory.save();
    } catch (error) {}
  }
);

module.exports = router;

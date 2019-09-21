const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Story = require("../../models/Story");
const Comment = require("../../models/Comment");
const validateStoryInput = require("../../validation/stories");

router.delete("/", async (req, res) => {
  try {
    await Story.deleteOne({ _id: req.query.id });
    res.json(req.query.id);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", (req, res) => {
  debugger
  if (!req.query.searchInput) {

    Story.find()
      .sort({ date: -1 })
      .then(stories => {
        res.json(stories);
      })
      .catch(err => res.status(404).json({ nostoriesfound: "No stories found" }));
  } else {
    Story.find({ title: { $regex: new RegExp(req.query.searchInput) } })
      .sort({ date: -1 })
      .then(story => {
        res.json(story)
      })
      .catch(err => res.status(404).json({ nostoriesfound: 'No stories found' }))
  }
})

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

router.get("/user/:userId", (req, res) => {
  Story.find({ authorId: req.params.userId })
    .sort({ date: -1 })
    .then(stories => res.json(stories))
    .catch(err =>
      res
        .status(404)
        .json({ nostoriesfound: "No stories found from that user" })
    );
});

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
      title: req.body.title,
      imageURL: req.body.imageURL
    });

    try {
      let createdStory = await newStory.save();
      res.send(createdStory);
    } catch (error) { }
  }
);

module.exports = router;

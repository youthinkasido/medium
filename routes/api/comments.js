const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Comment = require("../../models/Comment");
const User = require("../../models/User");
const router = express.Router();
const validateCommentInput = require("../../validation/comments");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      commenterId: req.body.commenterId,
      storyId: req.body.storyId,
      body: req.body.body
    });

    try {
      let createdComment = await newComment.save();
      res.send(createdComment);
    } catch (error) {}
  }
);

module.exports = router;

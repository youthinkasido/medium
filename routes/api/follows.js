const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Follow = require("../../models/Follow");
const User = require("../../models/User");
const router = express.Router();


router.post("/",
  (req, res) => {
    debugger
    const newFollow = new Follow({
      follower: req.body.follower,
      followee: req.body.followee
    });

    newFollow.save().then(follow => res.json(follow)
    .catch(err => console.log(err)));

    User.findById(req.body.followee).then(user => {
      debugger
        user
          .update({ $push: { followerIds: req.body.follower }})
          .then(user => {
            res.json("User updated!");
          })
          .catch(err => {
            res.status(400).send("Update not possible");
          });
    });
  }
);

router.delete("/",
  (req, res) => {

    ////delete controller

    Follow.findOne({ follower: req.body.follower, followee: req.body.followee }).then(follow => {
      follow.remove(); // finds follow object based on axios req body and deletes the follow from the db
    });

    User.findById(req.body.followee).then(user => { // find the followee, and update their followerIds based on the axios req
      user
        .update({ $pull: { followerIds: req.body.follower } }) // remove the follower id from the celebrity
        .then(user => {
          res.json("User updated!"); // give back json response to the user
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  }
);

module.exports = router;




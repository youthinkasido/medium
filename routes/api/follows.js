const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Follow = require("../../models/Follow");
const User = require("../../models/User");
const router = express.Router();

router.patch("/follow", (req, res) => {
  User.findById(req.body.followee).then(user => {
    user.followerIds.push(req.body.follower);
    user.save(function(err, user) {
      if (err) {
        console.log(err);
      }
    });
    res.send(user);
  });
});

router.patch("/unfollow", (req, res) => {
  User.findById(req.body.followee).then(user => {

    for (let index = 0; index < user.followerIds.length; index++) {
      const element = user.followerIds[index];
      if (element == req.body.follower) {
        user.followerIds.splice(index, 1); 
        
        
         
      }
    }

    user.save(function(err, user) {
      if (err) {
        console.log(err);
      }
    });
    
    res.send(user);
  });
});

module.exports = router;

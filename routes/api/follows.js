const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Follow = require("../../models/Follow");
const User = require("../../models/User");
const router = express.Router();




router.post("/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    debugger
    const newFollow = new Follow({
      follower: req.body.follower,
      followee: req.body.followee
    });
    debugger

    newFollow.save().then(follow => res.json(follow)
    .catch(err => console.log(err)));
debugger
    //  newFollow.save().then(follow => res.json(follow));

    User.findById(req.body.followee).then(user => {
      debugger
        // user.followerIds = user.followerIds.push(req.body.follower); 

       
// db.students.update(
//   { _id: 1 },
//   { $push: { scores: 89 } }
// )
       
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

router.delete("/:followId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const followId = req.body.id;

    Follow.find({ id: followId }).then(follow => {
      follow.remove();
    });
  }
);

module.exports = router;




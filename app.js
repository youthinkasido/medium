const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;
const passport = require('passport');
const users = require("./routes/api/users");
const likes = require("./routes/api/likes")
const follows = require('./routes/api/follows')
const bodyParser = require("body-parser");
require("./config/passport")(passport);
const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hi "));

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false })); //?
app.use(bodyParser.json()); // formats the json response into something

//////////// routes /////////
app.use("/api/users", users);
app.use("/api/follows", follows);
app.use("/api/likes", likes);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
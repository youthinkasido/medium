const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const app = express();
const users = require("./routes/api/users");
const stories = require("./routes/api/stories");

const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Hi "));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/stories", stories);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

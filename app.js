const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const app = express();
const users = require("./routes/api/users");
const likes = require("./routes/api/likes");
const follows = require("./routes/api/follows");
const stories = require("./routes/api/stories");
const comments = require("./routes/api/comments");
const bodyParser = require("body-parser");
const path = require("path");
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Hi "));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/stories", stories);
app.use("/api/users", users);
app.use("/api/follows", follows);
app.use("/api/likes", likes);
app.use("/api/comments", comments);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

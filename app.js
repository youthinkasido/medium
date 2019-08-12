const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;

const app = express();
const users = require("./routes/api/users");

const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  
app.use(bodyParser.urlencoded({ extended: false })); //?
app.use(bodyParser.json()); // formats the json response into something




//////////// routes /////////
app.get("/", (req, res) => res.send("Hello World "));
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
const express = require("express")
const router = express.Router()

// test route using axios request 
router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
module.exports = router;

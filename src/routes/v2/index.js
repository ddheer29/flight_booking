const express = require("express");
const router = express.Router();

router.get("/info", (req, res) => {
  res.json({ message: "API v2 is running" });
});

module.exports = router;

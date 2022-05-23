// libraries
var express = require("express");
var router = express.Router();

// controllers
var { home } = require("../controllers/home");

router.post("/", home);

module.exports = router;

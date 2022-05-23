// libraries
var express = require("express");
var cors = require("cors");

// require routes
var home = require("./routes/home");

// use
var app = express();
app.use(express.json());
app.use(cors());

// routes
app.use(home);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});

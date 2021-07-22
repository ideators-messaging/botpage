var express = require("express");
var path = require("path");
var app = express();
// app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send("<h1>Open Source For You!</h1>");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

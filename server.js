var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send("<h1>Open Source For You!!</h1>");
});

var server = app.listen(process.env.PORT || 6001, function () {
  var port = server.address().port;
  console.log("App now running on port ", port);
});

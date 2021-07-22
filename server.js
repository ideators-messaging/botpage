var express = require("express");
var app = express();
var path = __dirname + "/";

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

var server = app.listen(process.env.PORT || 6001, function () {
  var port = server.address().port;
  console.log("App now running on port ", port);
});

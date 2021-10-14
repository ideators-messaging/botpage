var express = require("express");
var app = express();
app.use(express.static(__dirname + "/"));

app.get("/bot-1", function (req, res) {
  res.sendFile(__dirname + "/bot-1.html");
});

app.get("/bot-2", function (req, res) {
  res.sendFile(__dirname + "/bot-2.html");
});

app.get("/bot-3", function (req, res) {
  res.sendFile(__dirname + "/bot-3.html");
});

app.get("/smartassist", function (req, res) {
  res.sendFile(__dirname + "/nice_smartassist.html");
});

var server = app.listen(process.env.PORT || 6001, function () {
  var port = server.address().port;
  console.log("App now running on port ", port);
});

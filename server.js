var express = require("express");
var app = express();
var cors = require('cors');
var fs = require('fs');

app.use(express.static(__dirname + "/"));
app.use(cors());

app.get("/bot-1", function (req, res) {
  res.sendFile(__dirname + "/bot-1.html");
});

app.get("/bot-2", function (req, res) {
  res.sendFile(__dirname + "/bot-2.html");
});

app.get("/bot-3", function (req, res) {
  res.sendFile(__dirname + "/bot-3.html");
});
//New route for NICE smart assist integration
// app.get("/smartassist", function (req, res) {
//   res.sendFile(__dirname + "/nice_smartassist.html");
// });

app.get("/api/localization", function (req, res){
  console.log("api/localization test")
  return new Promise(function (resolve, reject){
    fs.readFile(`${__dirname}/Genesys/lib/rbci18n.json`, "utf8", function(err, data){
      if(err){
        reject(err);
      }
      var contents = JSON.parse(data);
      console.log("api/localization: Localization file read successfully");
      return res.json(contents);
    })
  })

})

//New route for Genesys MultiClound Widget RBC Demo-Bot to Agent
app.get("/rbcgen", function (req, res) {
  res.sendFile(__dirname + "/Genesys/genmulticloud.html");
});
//New route for Genesys MultiClound Widget RBC Demo-Rich
app.get("/rbcgenbot", function (req, res) {
  res.sendFile(__dirname + "/Genesys/genmlbot.html");
});
//New route for Genesys MultiClound Widget Genesys Demo
app.get("/gen", function (req, res) {
  res.sendFile(__dirname + "/Genesys/gendemo.html");
});

//New route for Live Person demo page
app.get("/lp_old", function (req, res) {
  res.sendFile(__dirname + "/lpdemo.html");
});
//New route for LP new sandbox 68990778 - Testing
app.get("/lp_new", function (req, res) {
  res.sendFile(__dirname + "/lpdemo2.html");
});
//New route for LP new sandbox 68990778 -CEBA bot
app.get("/lp_new_ceba", function (req, res) {
  res.sendFile(__dirname + "/lpdemo3.html");
});

var server = app.listen(process.env.PORT || 6001, function () {
  var port = server.address().port;
  console.log("App now running on port ", port);
});

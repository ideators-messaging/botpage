var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(__dirname + "/public"));
var rbfg_client_info = require("./rbfg_client_info.js");
var di_client_info = require("./di_client_info.js");

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

app.get("/", function (req, res) {
  res.send("Web Service App now running");
});

app.get("/api/rbfg_client_info/:rbfg_client_number&:sac", function (req, res) {
  var client = rbfg_client_info.USER(req.params.rbfg_client_number);
  var sac = req.params.sac;

  if (client.SAC == sac) res.send(rbfg_client_info.AUTH("Y"));
  else res.send(rbfg_client_info.AUTH("N"));
});

app.get("/api/rbfg_client_info/:rbfg_client_number", function (req, res) {
  res.send(rbfg_client_info.USER(req.params.rbfg_client_number));
});

app.get("/api/di_client_info/:di_client_number", function (req, res) {
  var di_client = di_client_info.USER(req.params.di_client_number);
  delete di_client.ACCOUNT_INFORMATION;
  res.send(di_client);
});

app.get("/api/di_client_accounts/:di_client_number", function (req, res) {
  var client_accounts = di_client_info.USER(
    req.params.di_client_number
  ).ACCOUNT_INFORMATION;

  res.send({
    ACCOUNT_TYPE_1: client_accounts[0].ACCOUNT_TYPE,
    ACCOUNT_NUMBER_1: client_accounts[0].ACCOUNT_NUMBER,
    BALANCES_1: client_accounts[0].BALANCES,
    BALANCES_USD_1: client_accounts[0].BALANCES_USD,
    ACCOUNT_TYPE_2: client_accounts[1].ACCOUNT_TYPE,
    ACCOUNT_NUMBER_2: client_accounts[1].ACCOUNT_NUMBER,
    BALANCES_2: client_accounts[1].BALANCES,
    BALANCES_USD_2: client_accounts[1].BALANCES_USD,
  });
});

app.get(
  "/api/di_client_account_history/:di_client_account_number&:days",
  function (req, res) {
    var days = req.params.days;
    var di_client_account_number = req.params.di_client_account_number;

    if (di_client_account_number == 1) {
      var client_account_history =
        di_client_info.USER("4519444455556666").ACCOUNT_INFORMATION[0];

      if (days == 30) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
        });
      } else if (days == 60) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
          DATE_2: client_account_history.HISTORY[1].DATE,
          ACTION_2: client_account_history.HISTORY[1].ACTION,
          MARKET_2: client_account_history.HISTORY[1].MARKET,
          SYMBOL_2: client_account_history.HISTORY[1].SYMBOL,
          DESCRIPTION_2: client_account_history.HISTORY[1].DESCRIPTION,
        });
      } else if (days == 90) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
          DATE_2: client_account_history.HISTORY[1].DATE,
          ACTION_2: client_account_history.HISTORY[1].ACTION,
          MARKET_2: client_account_history.HISTORY[1].MARKET,
          SYMBOL_2: client_account_history.HISTORY[1].SYMBOL,
          DESCRIPTION_2: client_account_history.HISTORY[1].DESCRIPTION,
          DATE_3: client_account_history.HISTORY[2].DATE,
          ACTION_3: client_account_history.HISTORY[2].ACTION,
          MARKET_3: client_account_history.HISTORY[2].MARKET,
          SYMBOL_3: client_account_history.HISTORY[2].SYMBOL,
          DESCRIPTION_3: client_account_history.HISTORY[2].DESCRIPTION,
        });
      }
    } else if (di_client_account_number == 2) {
      var client_account_history =
        di_client_info.USER("4519444455556666").ACCOUNT_INFORMATION[1];

      if (days == 30) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
        });
      } else if (days == 60) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
          DATE_2: client_account_history.HISTORY[1].DATE,
          ACTION_2: client_account_history.HISTORY[1].ACTION,
          MARKET_2: client_account_history.HISTORY[1].MARKET,
          SYMBOL_2: client_account_history.HISTORY[1].SYMBOL,
          DESCRIPTION_2: client_account_history.HISTORY[1].DESCRIPTION,
        });
      } else if (days == 90) {
        res.send({
          DATE_1: client_account_history.HISTORY[0].DATE,
          ACTION_1: client_account_history.HISTORY[0].ACTION,
          MARKET_1: client_account_history.HISTORY[0].MARKET,
          SYMBOL_1: client_account_history.HISTORY[0].SYMBOL,
          DESCRIPTION_1: client_account_history.HISTORY[0].DESCRIPTION,
          DATE_2: client_account_history.HISTORY[1].DATE,
          ACTION_2: client_account_history.HISTORY[1].ACTION,
          MARKET_2: client_account_history.HISTORY[1].MARKET,
          SYMBOL_2: client_account_history.HISTORY[1].SYMBOL,
          DESCRIPTION_2: client_account_history.HISTORY[1].DESCRIPTION,
          DATE_3: client_account_history.HISTORY[2].DATE,
          ACTION_3: client_account_history.HISTORY[2].ACTION,
          MARKET_3: client_account_history.HISTORY[2].MARKET,
          SYMBOL_3: client_account_history.HISTORY[2].SYMBOL,
          DESCRIPTION_3: client_account_history.HISTORY[2].DESCRIPTION,
        });
      }
    }
  }
);

var server = app.listen(process.env.PORT || 6001, function () {
  var port = server.address().port;
  console.log("App now running on port ", port);
});

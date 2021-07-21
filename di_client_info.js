module.exports = {
  USER: (di_client_card_num) => {
    switch (di_client_card_num) {
      case "4519444455556666":
        return {
          DINO_CLIENT_NUMBER: "4519444455556666",
          RBFG_CLIENT_NUMBER: "4519111122223333",
          CLIENT_NAME: "Joe Carter",
          FIRST_NAME: "Joe",
          LAST_NAME: "Carter",
          LOB: "Direct Investing",
          CLIENT_TYPE: "N/A",
          ACCOUNT_INFORMATION: [
            {
              ACCOUNT_TYPE: "RRSP",
              ACCOUNT_NUMBER: "38478329302",
              BALANCES: "$10,000 CAD",
              BALANCES_USD: "$7,500 USD",
              HISTORY: [
                {
                  DATE: "05/10/2021",
                  ACTION: "Buy",
                  MARKET: "CA",
                  SYMBOL: "RY.TO",
                  DESCRIPTION: "ROYAL BANK OF CANADA",
                },
                {
                  DATE: "03/07/2021",
                  ACTION: "Deposit",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "TRANSFER FUNDS FROM RBC",
                },
                {
                  DATE: "01/05/2021",
                  ACTION: "Sell",
                  MARKET: "US",
                  SYMBOL: "APPL",
                  DESCRIPTION: "APPLE INC., UNSOLICITED, DA, EXCHANGE RATE",
                },
              ],
            },
            {
              ACCOUNT_TYPE: "Investments",
              ACCOUNT_NUMBER: "38478322301",
              BALANCES: "$6,000 CAD",
              BALANCES_USD: "$3,000 USD",
              HISTORY: [
                {
                  DATE: "05/10/2021",
                  ACTION: "Buy",
                  MARKET: "CA",
                  SYMBOL: "RY.TO",
                  DESCRIPTION: "RBC",
                },
                {
                  DATE: "03/07/2021",
                  ACTION: "Deposit",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "TRANSFER FUNDS FROM CHEQUING",
                },
                {
                  DATE: "01/05/2021",
                  ACTION: "Sell",
                  MARKET: "US",
                  SYMBOL: "TSLA",
                  DESCRIPTION: "TESLA",
                },
              ],
            },
          ],
        };
      case "4519222233334444":
        return {
          DINO_CLIENT_NUMBER: "4519555566667777",
          RBFG_CLIENT_NUMBER: "4519222233334444",
          CLIENT_NAME: "Erik Avery",
          FIRST_NAME: "Erik",
          LAST_NAME: "Avery",
          LOB: "Direct Investing",
          CLIENT_TYPE: "N/A",
          ACCOUNT_INFORMATION: [
            {
              ACCOUNT_TYPE: "RRSP",
              ACCOUNT_NUMBER: "38478329302",
              BALANCES: "$10,000 CAD",
              BALANCES_USD: "$7,500 USD",
              HISTORY: [
                {
                  DATE: "05/10/2021",
                  ACTION: "Buy",
                  MARKET: "CA",
                  SYMBOL: "RY.TO",
                  DESCRIPTION: "ROYAL BANK OF CANADA",
                },
                {
                  DATE: "03/07/2021",
                  ACTION: "Deposit",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "TRANSFER FUNDS FROM RBC",
                },
                {
                  DATE: "01/05/2021",
                  ACTION: "Sell",
                  MARKET: "US",
                  SYMBOL: "APPL",
                  DESCRIPTION: "APPLE INC., UNSOLICITED, DA, EXCHANGE RATE",
                },
              ],
            },
            {
              ACCOUNT_TYPE: "Investments",
              ACCOUNT_NUMBER: "38478322301",
              BALANCES: "$6,000 CAD",
              BALANCES_USD: "$3,000 USD",
              HISTORY: [
                {
                  DATE: "05/10/2021",
                  ACTION: "Buy",
                  MARKET: "CA",
                  SYMBOL: "RY.TO",
                  DESCRIPTION: "RBC",
                },
                {
                  DATE: "03/07/2021",
                  ACTION: "Deposit",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "TRANSFER FUNDS FROM CHEQUING",
                },
                {
                  DATE: "01/05/2021",
                  ACTION: "Sell",
                  MARKET: "US",
                  SYMBOL: "TSLA",
                  DESCRIPTION: "TESLA",
                },
              ],
            },
          ],
        };
      default:
        return {
          DINO_CLIENT_NUMBER: di_client_card_num,
          RBFG_CLIENT_NUMBER: "",
          CLIENT_NAME: "",
          FIRST_NAME: "",
          LAST_NAME: "",
          LOB: "",
          CLIENT_TYPE: "",
          ACCOUNT_INFORMATION: [
            {
              ACCOUNT_TYPE: "",
              ACCOUNT_NUMBER: "",
              BALANCES: "",
              BALANCES_USD: "",
              HISTORY: [
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
              ],
            },
            {
              ACCOUNT_TYPE: "",
              ACCOUNT_NUMBER: "",
              BALANCES: "",
              BALANCES_USD: "",
              HISTORY: [
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
                {
                  DATE: "",
                  ACTION: "",
                  MARKET: "",
                  SYMBOL: "",
                  DESCRIPTION: "",
                },
              ],
            },
          ],
        };
    }
  },
};

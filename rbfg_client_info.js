module.exports = {
  USER: (rbfg_client_card_num) => {
    switch (rbfg_client_card_num) {
      case "4519111122223333":
        return {
          RBFG_CLIENT_NUMBER: "4519111122223333",
          DINO_CLIENT_NUMBER: "4519444455556666",
          TITLE: "Mr",
          CLIENT_NAME: "Joe Carter",
          FIRST_NAME: "Joe",
          LAST_NAME: "Carter",
          HOME_ADDRESS: "1 Blue Jays Way",
          CITY: "Toronto",
          PROVINCE: "ON",
          DOB: "03/07/1960",
          POSTAL_CODE: "M5V 1J1",
          MOBILE_NUMBER: "416-341-1000",
          SAC: "1234",
          MARITAL_STATUS: "Married",
          GENDER: "Male",
        };
      case "4519222233334444":
        return {
          RBFG_CLIENT_NUMBER: "4519222233334444",
          DINO_CLIENT_NUMBER: "4519555566667777",
          TITLE: "Mr",
          CLIENT_NAME: "Erik Avery",
          FIRST_NAME: "Erik",
          LAST_NAME: "Avery",
          HOME_ADDRESS: "6880 Financial Drive",
          CITY: "Mississauga",
          PROVINCE: "ON",
          DOB: "01/01/1960",
          POSTAL_CODE: "L5N 7Y5",
          MOBILE_NUMBER: "905-111-1111",
          SAC: "1234",
          MARITAL_STATUS: "Married",
          GENDER: "Male",
        };
      default:
        return {
          RBFG_CLIENT_NUMBER: rbfg_client_card_num,
          DINO_CLIENT_NUMBER: "",
          TITLE: "",
          CLIENT_NAME: "",
          FIRST_NAME: "",
          LAST_NAME: "",
          HOME_ADDRESS: "",
          CITY: "",
          PROVINCE: "",
          DOB: "",
          POSTAL_CODE: "",
          MOBILE_NUMBER: "",
          SAC: "",
          MARITAL_STATUS: "",
          GENDER: "",
        };
    }
  },

  AUTH: (result) => {
    if (result == "Y") {
      return {
        AUTH: "Y",
      };
    } else {
      return {
        AUTH: "N",
      };
    }
  },
};

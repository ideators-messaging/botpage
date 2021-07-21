module.exports = {
  USER: (id) => {
    switch (id) {
      case "1":
        return {
          ACCT_NUMBER: "1111028888887777",
          ANI: "Set in CF",
          AUTH: "N",
          CLIENT_NAME: "Jagmeet Singh",
          CLIENT_SEGMENT: "Business",
          DIALEDNUMBER: "8007692512",
          IVRACT_001: "Natural Language IVR",
          IVRACT_002: "Balance-Inquiry",
          LANGUAGE: "English",
          TEST_CASE: "0001 set in CF",
        };
        break;
      case "2":
        return {
          ACCT_NUMBER: "1111028888887777",
          ANI: "Set in CF",
          AUTH: "N",
          CLIENT_NAME: "Jagmeet Singh",
          CLIENT_SEGMENT: "Business",
          DIALEDNUMBER: "8007692512",
          IVRACT_001: "Natural Language IVR",
          IVRACT_002: "Balance-Inquiry",
          LANGUAGE: "English",
          TEST_CASE: "0002 set in CF",
        };
        break;
      default:
      // code block
    }
  },
};

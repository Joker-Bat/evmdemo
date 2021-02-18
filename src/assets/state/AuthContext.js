import React, { createContext } from "react";

// const getPartyNames = data.map((elector) => elector.partyShortName);

// const partyNames = {};

const AuthContext = createContext({
  partyVote: "partyNames",
  hasResult: false,
  isVoted: false,
  isReady: false,
  hasMessage: false,
});

// getPartyNames.forEach((elector, index) => {
//   partyNames[elector] = 0;
// });

export default AuthContext;

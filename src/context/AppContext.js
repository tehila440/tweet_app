import React from "react";

const AppContext = React.createContext({
  userName: "",
  setUserName: "",
  tweetsArray: "",
  setTweetsArray: "",
});

export default AppContext;

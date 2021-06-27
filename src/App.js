import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [tweetsArray, setTweetsArray] = useState([]);
  const [userName, setUserName] = useState("default name");

  return (
    <div className="page-wrapper">
      <Router>
        <AppContext.Provider
          value={{
            userName: userName,
            setUserName: setUserName,
            tweetsArray: tweetsArray,
            setTweetsArray: setTweetsArray,
          }}
        >
          <div className="nav-wrapper">
            <NavBar />
          </div>
          <Switch>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route path="/users" component={Users}></Route>
            </div>
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;

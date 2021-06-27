import "../App.css";
import { useState, useContext } from "react";
import React from "react";
import AppContext from "../context/AppContext";

function Users(props) {
  const [newUserName, setNewUserName] = useState("");
  const appContext = useContext(AppContext);

  const handleUserName = (e) => {
    setNewUserName(e.target.value);
  };

  const handleClick = () => {
    appContext.setUserName(() => {
      return newUserName;
    });
    setNewUserName("");
  };

  return (
    <div className="content-wrapper">
      <div className="users">
        <h2>Profile</h2>
        <p>User Name</p>
        <div className="name-box">
          <input
            type="text"
            placeholder="username"
            onInput={handleUserName}
            value={newUserName}
            className="username-input"
          />
          <button className="input-button" onClick={handleClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;

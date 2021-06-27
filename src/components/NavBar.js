import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => (
  <div className="navbar">
    <div className="home-link">
      <Link to="/">Home</Link>
    </div>
    <div className="users-link">
      <Link to="/users">Profile</Link>
    </div>
  </div>
);

export default NavBar;

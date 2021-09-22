import React from "react";
import { Link } from "react-router-dom";
import { CHARACTERS, EPISODES, LOCATIONS } from "../constants";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={EPISODES}>Episodes</Link>
        </li>
        <li>
          <Link to={CHARACTERS}>Characters</Link>
        </li>
        <li>
          <Link to={LOCATIONS}>Locations</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

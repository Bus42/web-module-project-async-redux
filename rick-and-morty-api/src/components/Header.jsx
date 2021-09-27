import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Rick and Morty API Project
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

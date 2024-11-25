import React from "react";
import NewLogo from "../assets/NewLogo.png";
import search from "../assets/search.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {" "}
        <Link to="/">
          {" "}
          <img src={NewLogo} alt="Logo" className="panda-navbar" />
        </Link>
        <NavLink to="/AboutDirector">
          <div className="about-navbar">About Directors</div>
        </NavLink>
        <NavLink to="/RandomCrush">
          <div className="crush-navbar">Random Crush</div>
        </NavLink>
        <div className="search-box">
          <button className="btn-search">
            <img src={search} alt="Button Icon" style={{ height: "35px" }} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

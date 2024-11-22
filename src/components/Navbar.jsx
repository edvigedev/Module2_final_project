import React from "react";
import NewLogo from "../assets/NewLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {" "}
        <img src={NewLogo} alt="Logo" className="panda-navbar" />
        <div className="about-navbar">About</div>
        <div className="crush-navbar">Random Crush</div>
        <div className="search-box">
          <button className="btn-search">
            <img src="./assets/search.png" alt="Button Icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import NewLogo from "../assets/NewLogo.png";
import search from "../assets/search.png";
import { Link, NavLink } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Navbar = ({ movies, setMovies }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        {" "}
        <Link to="/">
          {" "}
          <img src={NewLogo} alt="Logo" className="panda-navbar" />
        </Link>
        <NavLink to="/Tarantino">
          <div className="about-navbar">Tarantino</div>
        </NavLink>
        <NavLink to="/RandomCrush">
          <div className="crush-navbar">Random Movie Crush</div>
        </NavLink>
        <div className="search-box">
          <button
            className="btn-search"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <img src={search} alt="Button Icon" style={{ height: "35px" }} />
          </button>
          <div className="search-area">
            {isSearchOpen && (
              <SearchComponent
                movies={movies}
                setMovies={setMovies}
                setIsSearchOpen={setIsSearchOpen}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

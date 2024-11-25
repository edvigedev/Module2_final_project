import React from "react";
import { Link } from "react-router-dom";

const AboutDirector = () => {
  return (
    <div className="about-container">
      <div className="tarantino-container">
        <Link to="/Tarantino">
          <h1>Quentin Tarantino</h1>
        </Link>
      </div>
    </div>
  );
};

export default AboutDirector;

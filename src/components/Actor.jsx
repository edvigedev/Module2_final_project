import React from "react";
import { Link } from "react-router-dom";

const Actor = ({ actor }) => {
  return (
    <>
      <Link to={`/ActorsDetails/${actor.id}`}>
        <div className="actor-container">
          <h4>{actor.name}</h4>
          <p> Role: {actor.role}</p>
          <img
            src={actor.picture}
            alt={actor.picture}
            className="actor-image"
          />
        </div>
      </Link>
    </>
  );
};

export default Actor;

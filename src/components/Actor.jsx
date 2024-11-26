import React from "react";

const Actor = ({ actor }) => {
  return (
    <div className="actor-container">
      <h4>{actor.name}</h4>
      <p> Role: {actor.role}</p>
      <img src={actor.picture} alt={actor.picture} className="actor-image"/>
    </div>
  );
};

export default Actor;

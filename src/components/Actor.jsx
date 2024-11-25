import React from "react";

const Actor = ({ actor }) => {
  return (
    <div>
      <h4>{actor.name}</h4>
      <p>{actor.role}</p>
    </div>
  );
};

export default Actor;

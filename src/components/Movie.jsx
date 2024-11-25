import React from "react";

const Movie = ({ oneMovie }) => {
  if (!oneMovie) return null; // Fallback for undefined data

  return (
    <div>
      <img src={oneMovie.poster} alt={`${oneMovie.title} Poster`} />
      <h2>{oneMovie.year}</h2>
      <h3>{oneMovie.date}</h3>
      <h3>{oneMovie.quote}</h3>
    </div>
  );
};

export default Movie;

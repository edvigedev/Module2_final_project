import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ oneMovie, darkTheme, setDarkTheme }) => {
  if (!oneMovie) return null; // Fallback for undefined data

  return (
    <div className={darkTheme ? "movie-card-dark-theme" : "movie-card"}>
      {/* Accéder à l'image via le serveur local */}

      <img
        src={`http://localhost:5005/images/posters/${oneMovie.poster}`}
        alt={`${oneMovie.title} Poster`}
      />

      <div className="movie-infos">
        <Link to={`/MovieDetails/${oneMovie.id}`}>
          <h2>
            {oneMovie.title} ({oneMovie.year})
          </h2>
        </Link>
        <h3>"{oneMovie.quote}"</h3>
      </div>
    </div>
  );
};

export default Movie;

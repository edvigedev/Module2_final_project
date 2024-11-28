import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const Movie = ({
  oneMovie,
  darkTheme,
  setDarkTheme,
  setMovies,
  showButtons,
}) => {
  if (!oneMovie) return null; // Fallback for undefined data

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/movies/${oneMovie.id}`);
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== oneMovie.id)
      );
      alert("Movie deleted successfully!");
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <>
      <div className={darkTheme ? "movie-card-dark-theme" : "movie-card"}>
        {/* Accéder à l'image via le serveur local */}

        <img
          src={`${API_URL}/images/posters/${oneMovie.poster}`}
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
      {showButtons && (
        <div className="button-wrapper">
          <Link to={`/edit-movie/${oneMovie.id}`}>
            <button className="edit-button">Edit</button>
          </Link>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Movie;

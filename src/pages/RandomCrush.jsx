import React from "react";
import { Link } from "react-router-dom";

const RandomCrush = ({ movies }) => {
  // Check if the movies array is valid
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>; // Handle the case where there are no movies
  }

  // Select a random movie
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];

  return (
    <section className="random-card-container">
      <div className="random-crush">
        <div className="quick-info-movieDetail">
          {/* Display the movie poster */}
          <img
            src={`http://localhost:5005/images/posters/${randomMovie.poster}`}
            alt={`${randomMovie.title} Poster`}
            className="details-poster"
            onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Fallback image if the poster is not found
          />
          <div className="text-quick-info-moviedetail">
            {/* Display the movie title and year */}
            <Link to={`/MovieDetails/${randomMovie.id}`}>
              <h2>
                {randomMovie.title} ({randomMovie.year || "Unknown Year"})
              </h2>
            </Link>
            {/* Display the movie's quote, if it exists */}
            {randomMovie.quote && (
              <h3 className="quote-moviedetail">"{randomMovie.quote}"</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomCrush;

import React from "react";
import Movie from "../components/Movie";

const Homepage = ({ movies, setMovies }) => {
  return (
    <div className="home-page">
      <h1>Movie Crush</h1>
      <p className="crush-description">
        Your ultimate destination for movies, reviews, and everything cinema.
        Discover the latest releases, explore hidden gems, and stay up-to-date
        with all things film. Dive into a world of entertainment, tailored just
        for you!
      </p>

      <div className="movie-list">
        {movies.map((oneMovie) => {
          return (
            <div key={oneMovie.id}>
              <Movie oneMovie={oneMovie} setMovies={setMovies} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;

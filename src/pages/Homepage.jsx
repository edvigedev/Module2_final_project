import React from "react";
import Movie from "../components/Movie";

const Homepage = ({ movies, setMovies }) => {
  return (
    <div className="home-page">
      <h1>Movie Crush</h1>
      <p className="crush-description">
        Welcome, Tarantino fans! <br></br>
        We are two developers united by our passion for Quentin Tarantino's
        iconic masterpieces. Here, you'll find everything a true fan needs
        insights into his greatest movies and plenty of inspiration for your
        next cinematic journey. <br></br>
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

import React from "react";
import Movie from "../components/Movie";

const Homepage = ({ movies, setMovies, darkTheme, setDarkTheme }) => {
  const sortedMovies = [...movies].sort((a, b) => a.year - b.year);
  return (
    <div className="home-page">
      <h1>Movie Crush</h1>
      <p className="crush-description">
        Welcome, Tarantino fans! <br></br>
        We are two developers united by our passion for Quentin Tarantino's
        iconic masterpieces. Here you'll find everything a true fan needs:
        insights into his great movies and plenty of inspiration for your next
        cinematic journey. <br></br>
      </p>

      <div className="movie-list">
        {sortedMovies.map((oneMovie) => {
          return (
            <div key={oneMovie.id}>
              <Movie
                oneMovie={oneMovie}
                setMovies={setMovies}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                showButtons={oneMovie.id > 9} // condition to let the existing data clean
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;

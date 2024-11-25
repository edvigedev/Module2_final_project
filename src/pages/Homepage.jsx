import React from "react";
import Movie from "../components/Movie";

const Homepage = ({ movies, setMovies }) => {
  return (
    <div className="home-page">
      <h1>Movie Crush</h1>
      <p className="crush-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        maiores recusandae incidunt non illum ad amet tenetur molestias tempore
        qui corporis a laboriosam ratione, modi voluptates maxime optio?
        Similique, nesciunt.
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

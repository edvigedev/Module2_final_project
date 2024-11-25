import React from "react";
import { useParams } from "react-router-dom";
import Actor from "../components/Actor";

const MovieDetails = ({ movies, setMovies }) => {
  const { movieId } = useParams();

  const movieDetail = movies.find((movie) => String(movie.id) === movieId);

  if (!movieDetail) {
    return (
      <div>
        <h2> Movie not found </h2>
      </div>
    );
  }

  return (
    <>
      <h1>{movieDetail.title}</h1>
      <div>
        <section>
          <img
            src={`http://localhost:5005/images/posters/${movieDetail.poster}`}
            alt={`${movieDetail.title} Poster`}
          />

          <div>
            <h3>{movieDetail.year}</h3>
            <h3>{movieDetail.duration}</h3>
            <h3>{movieDetail.quote}</h3>
          </div>
        </section>

        {/* Details Section */}
        <section>
          <div>
            <p>{movieDetail.description}</p>

            {/* Actors Section */}

            <div>
              <h2>Featuring</h2>
              <div>
                {movieDetail.actors.map((actor) => (
                  <Actor key={actor.id} actor={actor}></Actor>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetails;

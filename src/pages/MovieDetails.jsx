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
      <div className="movie-details">
        <h1 className="h1-movieDetail">{movieDetail.title}</h1>
        <div className="info-movieDetail">
          <section className="quick-info-movieDetail">
            <div>
              <img
                className="details-poster"
                src={`http://localhost:5005/images/posters/${movieDetail.poster}`}
                alt={`${movieDetail.title} Poster`}
              />
            </div>

            <div className="text-quick-info-moviedetail">
              <h3> Year: {movieDetail.year}</h3>
              <h3> Duration: {movieDetail.duration} min.</h3>
              <h3> "{movieDetail.quote}"</h3>
            </div>
          </section>

          {/* Details Section */}
          <section className="description-moviedetail">
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
      </div>
    </>
  );
};

export default MovieDetails;

import React from "react";
import { useParams } from "react-router-dom";
import Actor from "../components/Actor";

const MovieDetails = ({ movies, setMovies, darkTheme }) => {
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
      <div className={darkTheme ? "movie-details-dark-theme" : "movie-details"}>
        <h1 className="h1-movieDetail">{movieDetail.title}</h1>
        <div className="info-movieDetail">
          <section
            className={
              darkTheme
                ? "quick-info-movieDetail-dark-theme"
                : "quick-info-movieDetail"
            }
          >
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
              <h3 className="quote-moviedetail"> "{movieDetail.quote}"</h3>
            </div>
          </section>

          {/* Details Section */}
          <section className="description-moviedetail">
            <div>
              <p>{movieDetail.description}</p>

              {/* Actors Section */}
              <h2>Featuring</h2>
              <div className="featuring-container">
                <div className="actors-moviedetail">
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

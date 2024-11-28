import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Actor from "../components/Actor";
import { API_URL } from "../config";

const MovieDetails = ({ movies, setMovies, darkTheme }) => {
  const { movieId } = useParams(); // Extract the `movieId` from the URL
  const [movieDetail, setMovieDetail] = useState(null); // State to hold the details of the movie
  const [loading, setLoading] = useState(true); // State to manage the loading state

  useEffect(() => {
    // Check if the movie exists in the passed `movies` array (frontend state)
    const existingMovie = movies.find((movie) => String(movie.id) === movieId);
    if (existingMovie) {
      // If the movie exists, set it directly to `movieDetail` state
      setMovieDetail(existingMovie);
      setLoading(false); // Stop loading since we found the movie
    } else {
      // If the movie is not in the frontend state, fetch it from the backend
      const fetchMovie = async () => {
        try {
          const response = await axios.get(`${API_URL}/movies/${movieId}`); // GET request to fetch movie details
          setMovieDetail(response.data); // Set the fetched movie details to state
        } catch (error) {
          console.error("Error fetching movie details:", error); // Log any errors during the fetch
        } finally {
          setLoading(false); // Stop the loading state regardless of success or failure
        }
      };
      fetchMovie(); // Call the fetch function
    }
  }, [movieId, movies]); // Dependency array to trigger effect when `movieId` or `movies` changes

  // Display a loading message while the data is being fetched or processed
  if (loading) return <p>Loading...</p>;

  // If the movie is not found (e.g., invalid ID or fetch failure), display an error message
  if (!movieDetail) {
    return (
      <div>
        <h2>Movie not found</h2>
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
                ? "quick-info-movieDetail-dark"
                : "quick-info-movieDetail"
            }
          >
            <div>
              <img
                className="details-poster"
                src={movieDetail.poster}
                // src={`${API_URL}/images/posters/${movieDetail.poster}`}
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

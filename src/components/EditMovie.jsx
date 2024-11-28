import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = ({ movies, setMovies, darkTheme }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Movie state for editing
  const [newActor, setNewActor] = useState({
    name: "",
    role: "",
    picture: "",
    birthday: "",
    age: "",
    net_worth: "",
    occupation: "",
    gender: "",
    height: "",
    nationality: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/movies/${movieId}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleAddActor = () => {
    if (newActor.name && newActor.role) {
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        actors: [
          ...prevMovie.actors,
          {
            ...newActor,
            id: Date.now(),
            occupation: newActor.occupation.split(",").map((job) => job.trim()), // Convert to array
          },
        ],
      }));

      setNewActor({
        name: "",
        role: "",
        picture: "",
        birthday: "",
        age: "",
        net_worth: "",
        occupation: "",
        gender: "",
        height: "",
        nationality: "",
      });
    } else {
      alert("Please fill in the required fields for the actor (Name, Role).");
    }
  };

  const handleRemoveActor = (actorId) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      actors: prevMovie.actors.filter((actor) => actor.id !== actorId),
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5005/movies/${movieId}`,
        movie
      );
      setMovies((prevMovies) =>
        prevMovies.map((m) => (m.id === response.data.id ? response.data : m))
      );
      alert("Movie updated successfully!");
      navigate(`/MovieDetails/${movie.id}`);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={darkTheme ? "movie-details-dark-theme" : "movie-details"}>
      <h1 className="h1-movieDetail">Edit Movie</h1>
      <div className="info-movieDetail">
        <section
          className={
            darkTheme
              ? "quick-info-movieDetail-dark-theme"
              : "quick-info-movieDetail"
          }
        >
          <form onSubmit={handleUpdate} className="new-movie-form-container">
            {/* Actor Fields */}
            <h2>Edit Actors</h2>
            {movie.actors.map((actor) => (
              <div key={actor.id} className="form-group actor-edit">
                <h3>{actor.name}</h3>
                <button
                  type="button"
                  onClick={() => handleRemoveActor(actor.id)}
                >
                  Remove Actor
                </button>
              </div>
            ))}

            <h2>Add New Actor</h2>
            <div className="form-group">
              <label htmlFor="actor-name">Name:</label>
              <input
                type="text"
                id="actor-name"
                placeholder="Enter actor name"
                value={newActor.name}
                onChange={(e) =>
                  setNewActor({ ...newActor, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-role">Role:</label>
              <input
                type="text"
                id="actor-role"
                placeholder="Enter actor role"
                value={newActor.role}
                onChange={(e) =>
                  setNewActor({ ...newActor, role: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-picture">Picture URL:</label>
              <input
                type="text"
                id="actor-picture"
                placeholder="Enter picture URL"
                value={newActor.picture}
                onChange={(e) =>
                  setNewActor({ ...newActor, picture: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-birthday">Birthday:</label>
              <input
                type="date"
                id="actor-birthday"
                value={newActor.birthday}
                onChange={(e) =>
                  setNewActor({ ...newActor, birthday: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-age">Age:</label>
              <input
                type="number"
                id="actor-age"
                placeholder="Enter actor age"
                value={newActor.age}
                onChange={(e) =>
                  setNewActor({ ...newActor, age: parseInt(e.target.value) })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-net-worth">Net Worth:</label>
              <input
                type="number"
                id="actor-net-worth"
                placeholder="Enter net worth"
                value={newActor.net_worth}
                onChange={(e) =>
                  setNewActor({
                    ...newActor,
                    net_worth: parseFloat(e.target.value),
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-occupation">Occupation:</label>
              <input
                type="text"
                id="actor-occupation"
                placeholder="Enter occupations (comma-separated)"
                value={newActor.occupation}
                onChange={(e) =>
                  setNewActor({
                    ...newActor,
                    occupation: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-gender">Gender:</label>
              <input
                type="text"
                id="actor-gender"
                placeholder="Enter gender"
                value={newActor.gender}
                onChange={(e) =>
                  setNewActor({ ...newActor, gender: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-height">Height:</label>
              <input
                type="number"
                id="actor-height"
                placeholder="Enter height in meters"
                value={newActor.height}
                onChange={(e) =>
                  setNewActor({
                    ...newActor,
                    height: parseFloat(e.target.value),
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="actor-nationality">Nationality:</label>
              <input
                type="text"
                id="actor-nationality"
                placeholder="Enter nationality"
                value={newActor.nationality}
                onChange={(e) =>
                  setNewActor({ ...newActor, nationality: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={handleAddActor}>
                Add Actor
              </button>
            </div>

            <h2>Edit Movie</h2>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                id="year"
                value={movie.year}
                onChange={(e) => setMovie({ ...movie, year: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input
                type="number"
                id="duration"
                value={movie.duration || ""}
                onChange={(e) =>
                  setMovie({ ...movie, duration: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="quote">Quote:</label>
              <input
                type="text"
                id="quote"
                value={movie.quote}
                onChange={(e) => setMovie({ ...movie, quote: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="poster">Poster URL:</label>
              <input
                type="text"
                id="poster"
                value={movie.poster}
                onChange={(e) => setMovie({ ...movie, poster: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={movie.description}
                onChange={(e) =>
                  setMovie({ ...movie, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Update Movie</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditMovie;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Actor from "./Actor";

const NewMovie = ({ setMovies, darkTheme }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    quote: "",
    poster: "",
    description: "",
    actors: [], // Initialize as an empty array
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5005/movies",
        newMovie
      );
      setMovies((prevMovies) => [...prevMovies, response.data]); // Update movies state
      alert("Movie added successfully!");
      navigate(`/MovieDetails/${response.data.id}`);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div>
      <h1 className="h1-movieDetail">Add the 10th Movie</h1>
      <div className={darkTheme ? "info-movieDetail-dark" : "info-movieDetail"}>
        <section
          className={
            darkTheme ? "quick-info-movieDetail-dark" : "quick-info-movieDetail"
          }
        >
          <form onSubmit={handleSubmit} className="new-movie-form-container">
            {/* Actor Fields */}
            <h2>Add Actors</h2>
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
            <h2>Add Movie</h2>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                placeholder="Enter movie title"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                id="year"
                placeholder="Enter release year"
                value={newMovie.year}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, year: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input
                type="number"
                id="duration"
                placeholder="Enter the duration of the movie"
                value={newMovie.duration}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, duration: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="quote">Quote:</label>
              <input
                type="text"
                id="quote"
                placeholder="Enter a memorable quote"
                value={newMovie.quote}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, quote: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="poster">Poster URL:</label>
              <input
                type="text"
                id="poster"
                placeholder="Enter poster URL"
                value={newMovie.poster}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, poster: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="Enter movie description"
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Add Movie</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewMovie;

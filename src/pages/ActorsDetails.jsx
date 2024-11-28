import React from "react";
import { useParams } from "react-router-dom";

const ActorsDetails = ({ movies, darkTheme }) => {
  const { actorId } = useParams();

  // Combine all the actors into one array
  const allActors = movies.flatMap((movie) => movie.actors);

  // Find the actor by actor ID
  const actorDetail = allActors.find((actor) => String(actor.id) === actorId);

  // If actorId does not match, display fallback message
  if (!actorDetail) {
    return <div>Actor not found</div>;
  }

  // Ensure `occupation` is always treated as an array
  const occupations = Array.isArray(actorDetail.occupation)
    ? actorDetail.occupation
    : actorDetail.occupation
    ? actorDetail.occupation.split(",").map((job) => job.trim())
    : [];

  return (
    <div>
      <div className={darkTheme ? "movie-details-dark-theme" : "movie-details"}>
        <h1 className="h1-movieDetail">{actorDetail.name}</h1>
        <div className="info-movieDetail">
          <section
            className={
              darkTheme
                ? "quick-info-actorDetail-dark-theme"
                : "quick-info-actorDetail"
            }
          >
            <div>
              <img
                className="details-poster"
                src={actorDetail.picture}
                alt={`${actorDetail.name} Picture`}
              />
            </div>

            <div className="text-quick-info-moviedetail">
              <h3> Birthday: {actorDetail.birthday}</h3>
              <h3> Age: {actorDetail.age}</h3>
              <h3> Net Worth: ${actorDetail.net_worth.toLocaleString()}</h3>
            </div>
          </section>
        </div>

        {/* Details Section */}
        <section className="description-actordetail">
          <div className="occupation-actorDetail">
            <h2>Occupations</h2>
            <ul>
              {/* Use the prepared `occupations` array here */}
              {occupations.map((job, index) => (
                <li key={index}>
                  {job.charAt(0).toUpperCase() + job.slice(1).replace(/_/, " ")}
                </li>
              ))}
            </ul>
          </div>
          <div className="additional-info-actorDetail">
            <h2>Additional Information</h2>
            <h3>Gender: {actorDetail.gender}</h3>
            <h3>Height: {actorDetail.height} m</h3>
            <h3>Nationality: {actorDetail.nationality.toUpperCase()}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActorsDetails;

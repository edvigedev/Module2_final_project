import React from "react";

const Tarantino = ({ darkTheme }) => {
  return (
    <div className="tarantino-page">
      <header
        className={
          darkTheme ? "tarantino-header-dark-theme" : "tarantino-header"
        }
      >
        <h1>Quentin Tarantino</h1>
        <p>CANNES, FRANCE - MAY 27, 2023</p>
      </header>
      <section className="tarantino-profile">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg"
          alt="Quentin Tarantino"
          className="tarantino-photo"
        />
        <div className="tarantino-info">
          <ul className="tarantino-details">
            <li>
              <strong>Date of Birth:</strong> March 27, 1963
            </li>
            <li>
              <strong>Place of Birth:</strong> Knoxville, Tennessee
            </li>
            <li>
              <strong>Occupation:</strong> Director
            </li>
            <li>
              <strong>Notable Work:</strong> Pulp Fiction, Reservoir Dogs, Kill
              Bill
            </li>
            <li>
              <strong>Notable Awards:</strong> Palme d'Or, Academy Award for
              Best Original Screenplay
            </li>
          </ul>
          <h3>Biography</h3>
          <p>
            Quentin Tarantino, born on March 27, 1963, is an Oscar-winning
            filmmaker famous for his distinctive use of violence, profanity, and
            extended monologues. His films often include pop culture references
            and feature recurring collaborators like Samuel L. Jackson.
            Tarantino’s storytelling is known for its nonlinear structure and
            memorable dialogue, which, combined with his unique approach to
            filmmaking, has made him one of the most influential directors in
            modern cinema.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tarantino;

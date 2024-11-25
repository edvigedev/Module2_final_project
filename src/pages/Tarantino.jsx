import React from "react";

const Tarantino = () => {
  return (
    <div className="tarantino-page">
      <header className="tarantino-header">
        <h1>About Quentin Tarantino</h1>
        <p>CANNES, FRANCE - MAY 27, 2023</p>
      </header>
      <section className="tarantino-profile">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg"
          alt="Quentin Tarantino"
          className="tarantino-photo"
        />
        <div className="tarantino-info">
          <h2>Quentin Tarantino</h2>
          <p>
            Quentin Tarantino (born March 27, 1963) is an Oscar-winning
            filmmaker known for his use of violence, profanity, extended
            monologues, pop culture references, and recurring cast members like
            Samuel L. Jackson.
          </p>
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
        </div>
      </section>
    </div>
  );
};

export default Tarantino;

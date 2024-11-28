import React from "react";
import RandomQuote from "../components/RandomQuote";

const Tarantino = ({ darkTheme }) => {
  return (
    <div className="tarantino-page">
      <header
        className={
          darkTheme ? "tarantino-header-dark-theme" : "tarantino-header"
        }
      >
        <h1>Quentin Tarantino</h1>
        <p>1 movie away from retirement</p>
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
            {/* <li>
              <strong>Notable Work:</strong> Pulp Fiction, Reservoir Dogs, Kill
              Bill
            </li> */}
            <li>
              <strong>Notable Awards:</strong> Palme d'Or, Academy Award for
              Best Original Screenplay
            </li>
          </ul>
          
            <RandomQuote />
            <h3>Biography</h3>
            <p>
              Quentin Tarantino is one of the most daring and influential
              filmmakers of modern cinema, known for his sharp dialogue,
              nonlinear storytelling, and a unique ability to mix pop culture
              with stylized violence. His films—Pulp Fiction, Kill Bill,
              Reservoir Dogs, and Inglourious Basterds among them—have left an
              indelible mark on audiences and filmmakers alike, creating a style
              that's unmistakably his own. <br></br>Born in Knoxville,
              Tennessee, in 1963 and raised in Los Angeles, Tarantino had an
              unconventional path to success. He dropped out of high school and
              worked a string of odd jobs before finding himself at Video
              Archives, a video rental store. It was here, surrounded by shelves
              of cult classics and obscure films, that Tarantino absorbed a
              world of cinema. Self-taught and unpolished, his vast knowledge of
              movies turned him into a walking encyclopedia of film references,
              which would later shape his writing and directing. <br></br>Before
              stepping behind the camera, Tarantino was a screenwriter. He
              penned True Romance and Natural Born Killers, two films that bear
              his signature style but were directed by others. True Romance, in
              particular, demonstrates Tarantino’s gift for blending heart,
              humor, and brutality in a way that feels both visceral and poetic.
              He also famously wrote an early draft for From Dusk Till Dawn and
              an unproduced James Bond script. These early successes gave him
              the credibility to launch his directorial career with Reservoir
              Dogs, a movie that redefined the indie film landscape. Tarantino’s
              rise wasn’t just about skill—it was about risk. His work is
              unapologetically violent, laced with profanity, and filled with
              moments that push cultural boundaries. Beyond his craft, Tarantino
              has a remarkable ability to resurrect careers. John Travolta’s
              turn in Pulp Fiction turned the actor into a household name once
              more, while Jackie Brown reminded audiences of Pam Grier’s
              magnetism. He’s a provocateur, a cinephile, and above all, a
              storyteller whose work will continue to be celebrated long after
              the credits roll.
            </p>
          
        </div>
      </section>
    </div>
  );
};

export default Tarantino;

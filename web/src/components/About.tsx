import { Figure } from './Photo';

export function About() {
  return (
    <section className="section section--paper about" aria-labelledby="about-title" id="about">
      <div className="wrap about__grid">
        <Figure id="field-build" sizes="(max-width: 900px) 100vw, 56vw" className="about__photo" />

        <div className="about__text">
          <h2 id="about-title" className="h2">
            About
          </h2>
          <p className="lead">
            Most of what we do is practice for the Aerial Drone Competition. Matches are flown on a field of gates,
            arches, keyholes and landing pads, and you score by getting a small quadcopter through them.
          </p>
          <p>
            Members end up as pilots, who fly by hand, or in the autonomous group, who write Python programs that fly
            the course with nobody on the controls. Some people do both. Our drones are Robolink's CoDrone EDU.
          </p>
          <Figure id="banner-pilots" sizes="(max-width: 900px) 100vw, 30vw" className="about__small" />
        </div>
      </div>
    </section>
  );
}

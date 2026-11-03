import { Photo, getPhoto } from './Photo';

export function Hero() {
  const hero = getPhoto('hero-gate');
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__title">
          Aero Ravens
        </h1>
        <p className="hero__lede">
          The drone team at Canyon Crest Academy. We fly and program small drones and compete in the REC Foundation's
          Aerial Drone Competition.
        </p>
        <p className="hero__actions">
          <a className="btn btn--red" href="#join">
            Join the club
          </a>
          <a className="text-link" href="#results">
            See our results
          </a>
        </p>
      </div>

      <figure className="hero__media">
        <Photo id="hero-gate" sizes="(max-width: 900px) 100vw, 64vw" eager />
        <figcaption className="hero__cap">{hero.date}</figcaption>
      </figure>
    </section>
  );
}

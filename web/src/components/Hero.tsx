import { Photo, getPhoto } from './Photo';

export function Hero() {
  const hero = getPhoto('hero-gate');
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="eyebrow">Canyon Crest Academy · San Diego</p>
        <h1 id="hero-title" className="hero__title">
          Aero Ravens
        </h1>
        <p className="hero__lede">
          We fly small drones through gates. Sometimes by hand, sometimes with code that has to do it on its own.
        </p>
        <p className="hero__body">
          Canyon Crest Academy's drone team. We practice after school in Room F101 and compete in the REC Foundation's
          Aerial Drone Competition as teams 5951A and 5951B.
        </p>
        <div className="hero__actions">
          <a className="btn btn--red" href="#join">
            Join the club
          </a>
          <a className="btn btn--ghost" href="#record">
            Our results <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <figure className="hero__media">
        <Photo id="hero-gate" sizes="(max-width: 900px) 100vw, 62vw" eager />
        <figcaption className="hero__cap">
          <span className="fig__n">Fig. 01</span> {hero.caption}, {hero.date}
        </figcaption>
      </figure>

      <dl className="hero__strip">
        <div>
          <dt>Teams</dt>
          <dd>5951A / 5951B</dd>
        </div>
        <div>
          <dt>2025</dt>
          <dd>Skills Mission Champions, National West</dd>
        </div>
        <div>
          <dt>2026</dt>
          <dd>2nd of 50 in teamwork, West HS Championship</dd>
        </div>
        <div>
          <dt>Home base</dt>
          <dd>Room F101</dd>
        </div>
      </dl>
    </section>
  );
}

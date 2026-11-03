import { Figure } from './Photo';
import { SectionHead } from './SectionHead';
import { season } from '../data/site';

export function Work() {
  return (
    <section className="section section--paper work" aria-labelledby="work-title" id="work">
      <div className="wrap">
        <SectionHead n="03" label="Projects & engineering" title="What practice actually looks like." id="work-title" />

        <div className="work__rows">
          <article className="wrow">
            <div className="wrow__text">
              <p className="wrow__n">01 — Piloting</p>
              <h3>Flying next to someone else</h3>
              <p>
                Pilots spend most of practice on the teamwork field: take off, thread the gates, hit the keyholes, land,
                then do it again. We fly in pairs and call out what we're doing, because in a match the hard part isn't
                flying. It's flying in the same small space as another pilot without getting in each other's way.
              </p>
            </div>
            <Figure id="pilots-line" n="11" sizes="(max-width: 900px) 100vw, 55vw" className="wrow__fig" />
          </article>

          <article className="wrow wrow--flip wrow--pair">
            <div className="wrow__text">
              <p className="wrow__n">02 — Autonomous</p>
              <h3>Code that has to land where it says it will</h3>
              <p>
                The autonomous group programs the drones in Python. Week three is usually the first time someone sees
                their code move something real: a takeoff, a few moves, a landing. After that it's routines for the
                skills field, run over and over until the drone ends up on the pad, and working out why when it doesn't.
              </p>
            </div>
            <div className="wrow__pair">
              <Figure id="coding-screen" n="12" sizes="(max-width: 900px) 100vw, 30vw" />
              <Figure id="landing-pad" n="13" sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
          </article>

          <article className="wrow">
            <div className="wrow__text">
              <p className="wrow__n">03 — The field</p>
              <h3>We build the course ourselves</h3>
              <p>
                Practice fields don't come assembled. This year we set up the new teamwork field in week four and a
                separate pilot/autonomous field after that, which means a lot of tape, floor mats and gate stands. When
                part of the teamwork field stopped working mid-season, we changed the layout and kept practicing on the
                new one.
              </p>
            </div>
            <Figure id="field-carry" n="14" sizes="(max-width: 900px) 100vw, 55vw" className="wrow__fig" />
          </article>

          <article className="wrow wrow--flip">
            <div className="wrow__text">
              <p className="wrow__n">04 — Teaching</p>
              <h3>Running a summer camp</h3>
              <p>
                Every summer we run a camp for rising 7th to 11th graders. Campers learn to fly safely, write autonomous
                programs in Python, and run them on official competition fields. Camp fees go toward equipment for the
                next season.
              </p>
            </div>
            <Figure id="camp-group" n="15" sizes="(max-width: 900px) 100vw, 55vw" className="wrow__fig" />
          </article>
        </div>

        <div className="log">
          <div className="log__head">
            <h3 className="log__title">This season, week by week</h3>
            <p className="log__sub">2026–27 · from our Instagram posts</p>
          </div>
          <ol className="log__list">
            {season.map((s) => (
              <li key={s.date}>
                <time className="log__date">{s.date}</time>
                <span className="log__text">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

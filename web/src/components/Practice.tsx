import { Figure } from './Photo';
import { season } from '../data/site';

export function Practice() {
  return (
    <section className="section section--ink practice" aria-labelledby="practice-title" id="practice">
      <div className="wrap">
        <div className="practice__intro">
          <Figure id="pilots-line" sizes="(max-width: 900px) 100vw, 58vw" className="practice__fig" />
          <div>
            <h2 id="practice-title" className="h2">
              Practice
            </h2>
            <h3 className="h4 practice__sub">Piloting</h3>
            <p>
              Pilots spend most of practice on the teamwork field: take off, go through the gates and keyholes, land,
              repeat. In a match you share the field with another team's drone, so a lot of it is talking to each other
              and staying out of each other's way.
            </p>
            <h3 className="h4 practice__sub">Autonomous</h3>
            <p>
              The autonomous group programs the drones in Python. It starts with single commands like take off, move and
              land, and builds up to full routines for the skills field that get run, adjusted and run again.
            </p>
          </div>
        </div>

        <div className="practice__log">
          <div className="log">
            <h3 className="h4">This season so far</h3>
            <ol className="log__list">
              {season.map((s) => (
                <li key={s.date}>
                  <span className="log__date">{s.date}</span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <Figure id="coding-screen" sizes="(max-width: 900px) 100vw, 40vw" className="practice__side" />
        </div>

        <div className="camp">
          <Figure id="camp-group" sizes="(max-width: 900px) 100vw, 40vw" className="camp__fig" />
          <div className="camp__text">
            <h3 className="h4">Summer camp</h3>
            <p>
              In July we run a three-day camp for rising 7th to 11th graders. Campers learn to fly, write autonomous
              programs in Python, and try them on a competition field. The camp fees pay for equipment for the next
              season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

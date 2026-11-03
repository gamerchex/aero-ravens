import { Figure } from './Photo';
import { SectionHead } from './SectionHead';

const spec = [
  ['Meets', 'Tuesdays or Thursdays after school. You come on your assigned day.'],
  ['Where', 'Rooms F101 & F102, Canyon Crest Academy'],
  ['Drones', 'Robolink CoDrone EDU'],
  ['Code', 'Python'],
  ['League', 'REC Foundation Aerial Drone Competition'],
  ['Open to', 'Any CCA student. No experience needed.'],
];

export function About() {
  return (
    <section className="section section--paper about" aria-labelledby="about-title" id="about">
      <div className="wrap">
        <SectionHead n="01" label="About" title="Two ways to fly the same drone." id="about-title" />

        <div className="about__grid">
          <div className="about__copy prose">
            <p className="about__first">
              Aero Ravens is Canyon Crest Academy's drone club. Nearly everything we do builds toward the Aerial Drone
              Competition, a REC Foundation league where teams fly small quadcopters through a field of gates, arches,
              keyholes and landing pads.
            </p>
            <p>
              Members end up on one side of the room or the other. Pilots fly by hand, both in skills runs and in
              teamwork matches where two teams share the field and one score. The autonomous group writes Python that has
              to fly the same course with nobody on the sticks. Plenty of people do both.
            </p>
            <p>
              Nobody shows up knowing how. The first weeks are stick control and an obstacle course made from whatever is
              in the room. By October we're running full matches on a regulation field we set up ourselves, and fixing it
              when something breaks.
            </p>
            <p>
              Outside the season we run a summer camp for younger students, teaching them the same piloting and coding
              we learn ourselves.
            </p>
          </div>

          <dl className="spec" aria-label="Club details">
            <div className="spec__head" aria-hidden="true">
              <span>Spec sheet</span>
              <span>AR-5951</span>
            </div>
            {spec.map(([k, v]) => (
              <div className="spec__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about__photos">
          <Figure id="field-build" n="02" sizes="(max-width: 900px) 100vw, 58vw" className="about__photo-a" />
          <Figure id="banner-pilots" n="03" sizes="(max-width: 900px) 100vw, 36vw" className="about__photo-b" />
        </div>
      </div>
    </section>
  );
}

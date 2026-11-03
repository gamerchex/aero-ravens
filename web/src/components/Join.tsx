import { Figure } from './Photo';
import { SectionHead } from './SectionHead';
import { links } from '../data/site';

const expect = [
  ['First few weeks', 'Learn to fly: takeoffs, hovering, an obstacle course. Everyone starts here.'],
  ['Then pick a side', 'Piloting, autonomous coding, or both.'],
  ['During the season', 'Regular practice on the teamwork and skills fields as we get ready for competitions.'],
  ['Summer', 'We run a drone camp for younger students, and members help teach it.'],
];

export function Join() {
  return (
    <section className="section section--paper join" aria-labelledby="join-title" id="join">
      <div className="wrap">
        <SectionHead n="05" label="Join" title="You don't need to have flown before." id="join-title" />

        <div className="join__grid">
          <div className="join__copy prose">
            <p className="about__first">
              Most of us hadn't when we started. Aero Ravens is open to any Canyon Crest Academy student, and new members
              learn on the same drones and fields as everyone else.
            </p>
            <p>
              We meet <strong>Tuesdays or Thursdays after school</strong> in <strong>Rooms F101 and F102</strong>. Each
              member is assigned one of the two days, so it's one afternoon a week.
            </p>

            <ol className="expect">
              {expect.map(([k, v], i) => (
                <li key={k}>
                  <span className="expect__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="expect__k">{k}</span>
                  <span className="expect__v">{v}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="join__card" aria-label="How to join">
            <p className="join__card-label">How to join</p>
            <p className="join__card-text">
              Fill out the interest form. It takes a minute: your name, email, how much you've flown, and whether you're
              more into piloting or coding. We'll email you before the next meeting.
            </p>
            <a className="btn btn--red btn--block" href={links.interestForm} target="_blank" rel="noopener noreferrer">
              Open the interest form <span aria-hidden="true">↗</span>
            </a>
            <div className="join__alt">
              <p>Questions first?</p>
              <a href={`mailto:${links.email}`}>{links.email}</a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                DM {links.instagramHandle}
              </a>
            </div>
          </aside>
        </div>

        <Figure id="club-day" n="16" sizes="(max-width: 900px) 100vw, 80vw" className="join__fig" />
      </div>
    </section>
  );
}

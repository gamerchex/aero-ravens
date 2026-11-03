import { Figure } from './Photo';
import { links } from '../data/site';

export function Join() {
  return (
    <section className="section section--paper join" aria-labelledby="join-title" id="join">
      <div className="wrap join__grid">
        <div className="join__text">
          <h2 id="join-title" className="h2">
            Join the club
          </h2>
          <p className="lead">
            Any Canyon Crest Academy student can join, and you don't need to have flown before.
          </p>
          <p>
            The first few weeks are spent learning to fly. After that you can stay with piloting, move to the autonomous
            group, or do both.
          </p>
          <p>
            We meet once a week after school, on <strong>Tuesdays or Thursdays</strong> (you're assigned one), in{' '}
            <strong>Rooms F101 and F102</strong>.
          </p>
          <p className="join__actions">
            <a className="btn btn--red" href={links.interestForm} target="_blank" rel="noopener noreferrer">
              Fill out the interest form
            </a>
          </p>
          <p className="join__contact">
            Questions? Email <a href={`mailto:${links.email}`}>{links.email}</a> or message us on Instagram,{' '}
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              {links.instagramHandle}
            </a>
            .
          </p>
        </div>

        <Figure id="club-day" sizes="(max-width: 900px) 100vw, 50vw" className="join__fig" />
      </div>
    </section>
  );
}

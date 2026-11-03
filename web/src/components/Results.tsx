import { Figure } from './Photo';

export function Results() {
  return (
    <section className="section section--paper results" aria-labelledby="results-title" id="results">
      <div className="wrap">
        <h2 id="results-title" className="h2 results__title">
          Results
        </h2>

        <article className="result result--2026">
          <Figure id="team-awards" sizes="(max-width: 900px) 100vw, 66vw" className="result__fig" caption={false} />
          <div className="result__text">
            <p className="meta">2026 West Aerial Drone HS Championship</p>
            <h3 className="h3">2nd place in teamwork, out of 50 teams</h3>
            <p>
              Teams 5951A and 5951B got through the quarterfinals and semifinals of the teamwork bracket. In teamwork
              you're paired with another team and share one score, so most of our practice goes into it.
            </p>
          </div>
        </article>

        <article className="result result--2025">
          <div className="result__text">
            <p className="meta">2025 National West</p>
            <h3 className="h3">Skills Mission Champion and the Coding Award</h3>
            <p>
              5951A had the top skills score of the 43 teams there: 410 piloting plus 225 autonomous, for 635. That was
              12th of 824 teams in the world skills standings that season. In teamwork we finished 7th and lost in the
              quarterfinals.
            </p>
            <p className="results__more">
              Other awards: a win at the 2025 BHHS regional, and an All-Around Award at Troy High School.
            </p>
          </div>
          <Figure id="trophy-2025" sizes="(max-width: 900px) 100vw, 34vw" className="result__fig" caption={false} />
        </article>

        <div className="results__strip">
          <Figure id="team-flag" sizes="(max-width: 900px) 100vw, 45vw" className="rs rs--a" />
          <Figure id="team-backs" sizes="(max-width: 900px) 50vw, 26vw" className="rs rs--b" showDate={false} />
          <Figure id="comp-pits" sizes="(max-width: 900px) 50vw, 26vw" className="rs rs--c" showDate={false} />
        </div>
      </div>
    </section>
  );
}

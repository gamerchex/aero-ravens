import { Figure } from './Photo';
import { SectionHead } from './SectionHead';
import { results } from '../data/site';

export function Record() {
  return (
    <section className="section section--ink record" aria-labelledby="record-title" id="record">
      <div className="wrap">
        <SectionHead n="02" label="Competitions" title="The record so far." id="record-title">
          <p>
            We compete in the REC Foundation's Aerial Drone Competition. Teams are scored on piloting skills, autonomous
            skills (the drone flies on code alone), and teamwork matches where you're paired with another team. Judges
            also interview each team about how it works.
          </p>
        </SectionHead>

        <article className="feature">
          <Figure id="team-awards" n="04" sizes="(max-width: 900px) 100vw, 55vw" className="feature__fig" />
          <div className="feature__text">
            <p className="feature__meta">2026 · West Aerial Drone HS Championship</p>
            <h3 className="feature__title">Second of 50 in teamwork.</h3>
            <p>
              Teams 5951A and 5951B made it through the quarterfinals and semifinals of the teamwork bracket and finished
              second out of 50 teams from across the western region.
            </p>
            <p>
              Teamwork is the event we practice most and the hardest one to plan for. You're paired with a team you may
              have never met, you share a single score, and you have to agree on who does what before the match starts.
            </p>
          </div>
        </article>

        <article className="feature feature--flip">
          <Figure id="trophy-2025" n="05" sizes="(max-width: 900px) 100vw, 40vw" className="feature__fig feature__fig--small" />
          <div className="feature__text">
            <p className="feature__meta">2025 · National West Championship</p>
            <h3 className="feature__title">Skills champions, plus the Coding Award.</h3>
            <p>
              5951A posted the highest combined skills score of the 43 teams at National West, and won the Skills Mission
              Champion award and the Coding Award. That score put us 12th of 824 teams in the world skills standings
              that season.
            </p>
            <table className="readout">
              <caption className="visually-hidden">2025 National West results for team 5951A</caption>
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Place</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Skills, combined</th>
                  <td>1st of 43</td>
                  <td>635</td>
                </tr>
                <tr>
                  <th scope="row">· Piloting</th>
                  <td />
                  <td>410</td>
                </tr>
                <tr>
                  <th scope="row">· Autonomous</th>
                  <td />
                  <td>225</td>
                </tr>
                <tr>
                  <th scope="row">Teamwork</th>
                  <td>7th of 43</td>
                  <td>144 avg</td>
                </tr>
                <tr>
                  <th scope="row">Teamwork bracket</th>
                  <td>Quarterfinals</td>
                  <td />
                </tr>
                <tr>
                  <th scope="row">World skills standings</th>
                  <td>12th of 824</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <div className="strips">
          <h3 className="strips__title">All results</h3>
          <ol className="strips__list">
            {results.map((r) => (
              <li className="strip" key={r.event + r.year}>
                <span className="strip__year">{r.year}</span>
                <span className="strip__event">{r.event}</span>
                <span className="strip__result">{r.result}</span>
                <span className="strip__detail">{r.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="record__photos">
          <Figure id="team-flag" n="06" sizes="(max-width: 900px) 100vw, 50vw" className="rp rp--a" />
          <Figure id="comp-field" n="07" sizes="(max-width: 900px) 100vw, 50vw" className="rp rp--b" />
          <Figure id="team-backs" n="08" sizes="(max-width: 900px) 100vw, 33vw" className="rp rp--c" />
          <Figure id="comp-pits" n="09" sizes="(max-width: 900px) 100vw, 33vw" className="rp rp--d" />
          <Figure id="team-2025" n="10" sizes="(max-width: 900px) 100vw, 33vw" className="rp rp--e" />
        </div>
      </div>
    </section>
  );
}

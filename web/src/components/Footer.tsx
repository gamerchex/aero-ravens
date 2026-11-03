import { links, nav } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <img src="/media/logo-150.webp" width="48" height="48" alt="Aero Ravens logo" loading="lazy" />
          <div>
            <p className="site-footer__name">Aero Ravens</p>
            <p>Canyon Crest Academy's drone team.</p>
            <p>Teams 5951A and 5951B, REC Foundation Aerial Drone Competition.</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="site-footer__label">Site</p>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#join">Join</a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="site-footer__label">Contact</p>
          <ul>
            <li>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </li>
            <li>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {links.instagramHandle}
              </a>
            </li>
            <li>Room F101, Canyon Crest Academy</li>
          </ul>
        </div>
      </div>
      <div className="wrap site-footer__base">
        <p>© {new Date().getFullYear()} Aero Ravens · Canyon Crest Academy</p>
        <p className="site-footer__coords" aria-hidden="true">
          F101 · 5951A / 5951B
        </p>
      </div>
    </footer>
  );
}

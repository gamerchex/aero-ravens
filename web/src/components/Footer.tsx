import { links } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <p className="site-footer__brand">
          <img src="/media/logo-150.webp" width="32" height="32" alt="" loading="lazy" />
          <span>Aero Ravens</span>
        </p>
        <p>Room F101, Canyon Crest Academy</p>
        <p>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </p>
        <p>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p className="site-footer__copy">© {new Date().getFullYear()} Aero Ravens</p>
      </div>
    </footer>
  );
}

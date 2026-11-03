import { useEffect, useState } from 'react';
import { nav } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Unlock page scroll right away so the anchor jump that follows the click can happen.
  const close = () => {
    document.body.classList.remove('menu-open');
    setOpen(false);
  };

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand" onClick={close} aria-label="Aero Ravens, back to top">
          <img src="/media/logo-150.webp" width="34" height="34" alt="" className="brand__mark" />
          <span className="brand__name">Aero Ravens</span>
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-btn__bars" aria-hidden="true" />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#join" className="btn btn--red btn--sm" onClick={close}>
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}

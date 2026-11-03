import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { photos, Photo, photoSources, type PhotoGroup } from './Photo';
import { SectionHead } from './SectionHead';

const filters: { key: 'all' | PhotoGroup; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'competition', label: 'Competitions' },
  { key: 'practice', label: 'Practice' },
  { key: 'camp', label: 'Camp & events' },
];

const INITIAL = 16;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all');
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(
    () => photos.filter((p) => p.gallery && (filter === 'all' || p.group === filter)),
    [filter],
  );

  const open = (i: number, el: HTMLButtonElement) => {
    lastTrigger.current = el;
    setActive(i);
  };
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (active !== null && !dlg.open) dlg.showModal();
    if (active === null && dlg.open) {
      dlg.close();
      lastTrigger.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, step]);

  const current = active !== null ? items[active] : null;
  const big = current ? photoSources(current.id) : null;

  return (
    <section className="section section--ink gallery" aria-labelledby="gallery-title" id="gallery">
      <div className="wrap">
        <SectionHead n="04" label="Gallery" title="Photos, mostly off our phones." id="gallery-title">
          <p>
            Practices, competitions and camp, from the last two seasons. Tap any photo for a closer look. More on{' '}
            <a href="https://www.instagram.com/cca.aero.ravens/">Instagram</a>.
          </p>
        </SectionHead>

        <div className="filters" role="group" aria-label="Filter photos">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className="filter"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
          <span className="filters__count" aria-live="polite">
            {items.length} photos
          </span>
        </div>

        <ul className="masonry">
          {(showAll ? items : items.slice(0, INITIAL)).map((p, i) => (
            <li key={p.id} className="masonry__item">
              <button type="button" className="masonry__btn" onClick={(e) => open(i, e.currentTarget)}>
                <Photo id={p.id} sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" />
                <span className="masonry__cap">
                  {p.caption}
                  <span>{p.date}</span>
                </span>
                <span className="visually-hidden">Open larger view</span>
              </button>
            </li>
          ))}
        </ul>
        {!showAll && items.length > INITIAL && (
          <div className="gallery__more">
            <button type="button" className="btn btn--ghost" onClick={() => setShowAll(true)}>
              Show all {items.length} photos
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={close}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && big && (
          <div className="lightbox__inner">
            <img
              key={current.id}
              className="lightbox__img"
              src={big.src}
              srcSet={big.srcSet}
              sizes="92vw"
              width={big.width}
              height={big.height}
              alt={current.alt}
            />
            <div className="lightbox__bar">
              <p className="lightbox__cap">
                <span className="fig__n">
                  {String((active ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                {current.caption} <span className="fig__date">{current.date}</span>
              </p>
              <div className="lightbox__ctrl">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
                  ←
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo">
                  →
                </button>
                <button type="button" onClick={close} aria-label="Close photo viewer" autoFocus>
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

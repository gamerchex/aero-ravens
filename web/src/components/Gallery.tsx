import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { photos, Photo, photoSources, type PhotoGroup, type PhotoInfo } from './Photo';
import { links } from '../data/site';

const filters: { key: 'all' | PhotoGroup; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'competition', label: 'Competitions' },
  { key: 'practice', label: 'Practice' },
  { key: 'camp', label: 'Camp & events' },
];

const INITIAL = 16;

function columnsFor(width: number) {
  if (width <= 600) return 2;
  if (width <= 1000) return 3;
  return 4;
}

function useColumnCount() {
  const [cols, setCols] = useState(() => (typeof window === 'undefined' ? 4 : columnsFor(window.innerWidth)));
  useEffect(() => {
    const onResize = () => setCols(columnsFor(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return cols;
}

/**
 * Puts each photo in the currently shortest column, in order. Because it only ever appends,
 * the first photos keep their spots when more are shown.
 */
function toColumns(items: PhotoInfo[], count: number) {
  const cols: { p: PhotoInfo; i: number }[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  items.forEach((p, i) => {
    const { width, height } = photoSources(p.id);
    let c = 0;
    for (let k = 1; k < count; k++) if (heights[k] < heights[c] - 0.01) c = k;
    cols[c].push({ p, i });
    heights[c] += height / width + 0.04;
  });
  return cols;
}

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all');
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [clipHeight, setClipHeight] = useState<number | null>(null);
  const colCount = useColumnCount();

  const items = useMemo(
    () => photos.filter((p) => p.gallery && (filter === 'all' || p.group === filter)),
    [filter],
  );
  const columns = useMemo(() => toColumns(items, colCount), [items, colCount]);

  const collapsible = items.length > INITIAL;
  const collapsed = collapsible && !expanded;
  const hiddenCount = items.length - INITIAL;

  // While collapsed, cut the grid just above the first photo past the preview in each column,
  // so the preview ends on an even line.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!collapsible || !grid) {
      setClipHeight(null);
      return;
    }
    const measure = () => {
      const top = grid.getBoundingClientRect().top;
      let line = Infinity;
      grid.querySelectorAll<HTMLElement>('.masonry__col').forEach((col) => {
        const shown = [...col.querySelectorAll<HTMLElement>('.masonry__item')].filter(
          (el) => Number(el.dataset.i) < INITIAL,
        );
        const last = shown[shown.length - 1];
        if (last) line = Math.min(line, last.getBoundingClientRect().bottom - top);
      });
      setClipHeight(Number.isFinite(line) ? Math.round(line) : null);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [collapsible, columns]);

  const expand = () => setExpanded(true);

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
    <section className="section section--ink gallery" aria-labelledby="gallery-title" id="photos">
      <div className="wrap">
        <div className="gallery__head">
          <h2 id="gallery-title" className="h2">
            Photos
          </h2>
          <p>
            Practices, competitions and camp from the last two seasons. There are more on{' '}
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            .
          </p>
        </div>

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

        <div
          className={`masonry-wrap${collapsed ? ' is-collapsed' : ''}`}
          style={collapsed && clipHeight ? { maxHeight: clipHeight } : undefined}
        >
          <div className="masonry" ref={gridRef} style={{ '--cols': colCount } as React.CSSProperties}>
            {columns.map((col, c) => (
              <ul className="masonry__col" key={c}>
                {col.map(({ p, i }) => {
                  const hidden = collapsed && i >= INITIAL;
                  return (
                    <li key={p.id} className="masonry__item" data-i={i} >
                      <button
                        type="button"
                        className="masonry__btn"
                        onClick={(e) => open(i, e.currentTarget)}
                        tabIndex={hidden ? -1 : undefined}
                        aria-hidden={hidden || undefined}
                      >
                        <Photo id={p.id} sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" />
                        <span className="visually-hidden">Open larger view: {p.caption}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
          {collapsed && (
            <div className="gallery__more">
              <button type="button" className="more-btn" onClick={expand}>
                <span className="more-btn__plus" aria-hidden="true" />
                <span className="more-btn__label">View more photos</span>
                <span className="more-btn__count">+{hiddenCount}</span>
              </button>
            </div>
          )}
        </div>
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
                <span className="lightbox__count">
                  {String((active ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                {current.caption} <span className="lightbox__date">{current.date}</span>
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

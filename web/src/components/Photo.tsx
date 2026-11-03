import photosData from '../data/photos.json';
import media from '../data/media.json';

export type PhotoGroup = 'competition' | 'practice' | 'camp';
export type PhotoInfo = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date: string;
  group: PhotoGroup;
  pos: string;
  gallery?: boolean;
};

type Media = Record<string, { w: number; h: number; widths: number[] }>;

export const photos = photosData as PhotoInfo[];
const byId = new Map(photos.map((p) => [p.id, p]));

export function getPhoto(id: string): PhotoInfo {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown photo: ${id}`);
  return p;
}

export function photoSources(id: string) {
  const m = (media as Media)[id];
  const srcSet = m.widths.map((w) => `/media/${id}-${w}.webp ${w}w`).join(', ');
  const largest = m.widths[m.widths.length - 1];
  return { srcSet, src: `/media/${id}-${largest}.webp`, width: m.w, height: m.h, largest };
}

type Props = {
  id: string;
  sizes: string;
  className?: string;
  eager?: boolean;
};

/** Responsive, lazy-loaded club photo. Crop is controlled by CSS + the photo's focal point. */
export function Photo({ id, sizes, className, eager }: Props) {
  const p = getPhoto(id);
  const s = photoSources(id);
  return (
    <img
      className={className}
      src={s.src}
      srcSet={s.srcSet}
      sizes={sizes}
      width={s.width}
      height={s.height}
      alt={p.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : undefined}
      style={{ objectPosition: p.pos }}
    />
  );
}

/** Photo with a short caption underneath. */
export function Figure({
  id,
  sizes,
  className,
  eager,
  showDate = true,
  caption = true,
}: Props & { showDate?: boolean; caption?: boolean }) {
  const p = getPhoto(id);
  return (
    <figure className={`fig ${className ?? ''}`}>
      <div className="fig__frame">
        <Photo id={id} sizes={sizes} eager={eager} />
      </div>
      {caption && (
        <figcaption className="fig__cap">
          {p.caption}
          {showDate && <span className="fig__date">, {p.date}</span>}
        </figcaption>
      )}
    </figure>
  );
}

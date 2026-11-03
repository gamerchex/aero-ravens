// Scroll-in animations. Elements are tagged here (not in the markup) so the page is fully
// visible if JavaScript is off, and nothing animates for people who prefer reduced motion.

const RULES: { selector: string; kind: 'up' | 'fade' }[] = [
  { selector: '.fig', kind: 'fade' },
  { selector: '.section .h2', kind: 'up' },
  { selector: '.about__text > p, .result__text, .practice__intro > div > *, .log h3, .camp__text', kind: 'up' },
  { selector: '.join__text > *, .gallery__head p, .filters', kind: 'up' },
  { selector: '.log__list li', kind: 'up' },
  { selector: '.masonry__item', kind: 'fade' },
];

export function startReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );

  const tag = () => {
    for (const { selector, kind } of RULES) {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (el.dataset.reveal) return;
        el.dataset.reveal = kind;
        // stagger list rows a little
        if (el.matches('.log__list li')) {
          const i = [...el.parentElement!.children].indexOf(el);
          el.style.setProperty('--d', `${i * 50}ms`);
        }
        io.observe(el);
      });
    }
  };

  tag();
  const mo = new MutationObserver(tag);
  mo.observe(document.getElementById('root')!, { childList: true, subtree: true });
  return () => {
    mo.disconnect();
    io.disconnect();
  };
}

import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Record } from './components/Record';
import { Work } from './components/Work';
import { Gallery } from './components/Gallery';
import { Join } from './components/Join';
import { Footer } from './components/Footer';

/** Fade-in for figures and rows as they enter the viewport. Skipped for reduced motion. */
function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll<HTMLElement>('.fig, .wrow__text, .feature__text, .strip, .log li');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

export function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Record />
        <Work />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  );
}

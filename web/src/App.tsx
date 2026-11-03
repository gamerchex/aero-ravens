import { useEffect } from 'react';
import { startReveal } from './reveal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Results } from './components/Results';
import { Practice } from './components/Practice';
import { Gallery } from './components/Gallery';
import { Join } from './components/Join';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => startReveal(), []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Results />
        <Practice />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  );
}

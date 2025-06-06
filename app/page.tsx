'use client';

import Hero from './components/Hero';
import About from './about/page';
import Experience from './experience/page';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative pt-20 overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

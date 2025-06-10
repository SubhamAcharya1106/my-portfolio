'use client';

import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Experience from './components/ui/Experience';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';

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

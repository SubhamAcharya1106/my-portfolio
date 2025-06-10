'use client';

import Projects from '../components/ui/Projects';
import Contact from '../components/ui/Contact';

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-16">
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Subham Acharya</h1>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/#about" className="hover:text-pink-400 transition relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="hover:text-pink-400 transition relative group">
              Experience
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link href="/#project" className="hover:text-pink-400 transition relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-pink-400 transition relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <a
              href="/subhamresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition relative group"
            >
              Resume
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

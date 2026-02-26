"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">
          Jarafu Ijudigal
        </span>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#experience" className="hover:opacity-70 transition">
            Experience
          </a>
          <a href="#projects" className="hover:opacity-70 transition">
            Projects
          </a>
          <a href="#certifications" className="hover:opacity-70 transition">
            Certifications
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>

          <a
            href="https://github.com/jarafu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ijudiga-jarafu-748165211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            LinkedIn
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const workHref = pathname === "/" ? "#projects" : "/#projects";
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setNavVisible(true);
      return;
    }
    // Small delay then fade in
    const timer = setTimeout(() => setNavVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const linkClass = (href?: string) => {
    const isActive = href && pathname === href;
    return `font-serif text-base transition-colors duration-200 ${
      isActive
        ? "text-[#8c63d1] font-semibold"
        : "text-[#6b6b6b] hover:text-[#333333]"
    }`;
  };

  const mobileLinkClass = (href?: string) => {
    const isActive = href && pathname === href;
    return `font-serif text-2xl transition-colors duration-200 ${
      isActive
        ? "text-[#8c63d1] font-semibold"
        : "text-[#6b6b6b] hover:text-[#333333]"
    }`;
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-opacity duration-300 ease-out"
      style={{ opacity: navVisible ? 1 : 0 }}
    >
      <nav
        className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-[#4c4c4c] hover:text-[#8f8f8f] transition-colors duration-200"
          aria-label="Bhagyashree Phadnis — home"
        >
          B.
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          <li>
            <Link href={workHref} className={linkClass()}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/play" className={linkClass("/play")}>
              Play
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass()}
              aria-label="Download résumé (opens in new tab)"
            >
              Resume
            </a>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-[2px] bg-[#4c4c4c] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#4c4c4c] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#4c4c4c] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <ul className="flex flex-col items-center gap-8 py-10" role="list">
            <li>
              <Link
                href={workHref}
                className={mobileLinkClass()}
                onClick={() => setMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/play"
                className={mobileLinkClass("/play")}
                onClick={() => setMenuOpen(false)}
              >
                Play
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileLinkClass()}
                aria-label="Download résumé (opens in new tab)"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className={mobileLinkClass("/about")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

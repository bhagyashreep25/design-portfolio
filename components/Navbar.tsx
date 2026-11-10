"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The nav slides away while you scroll down so the content has the page.
// true = it slides back as soon as you scroll up; false = only once you're
// back near the top.
const REVEAL_ON_SCROLL_UP = true;
// Always shown until the page has scrolled past the bar itself
const HIDE_AFTER = 100;
// Scroll moves smaller than this are ignored, so trackpad jitter and iOS
// bounce don't make the nav flicker
const SCROLL_TOLERANCE = 8;

export default function Navbar() {
  const pathname = usePathname();
  const workHref = pathname === "/" ? "#projects" : "/#projects";
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

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

  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 10);

      if (y < HIDE_AFTER) {
        setHidden(false);
        lastY = y;
        return;
      }
      // Only count a direction once it has moved past the tolerance; small
      // moves accumulate against the last position we acted on
      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_TOLERANCE) return;
      if (delta > 0) setHidden(true);
      else if (REVEAL_ON_SCROLL_UP) setHidden(false);
      lastY = y;
    };

    // One update per frame, however many scroll events fire
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Never hide an open menu, and bring the nav back when a keyboard user
  // tabs into it
  const isHidden = hidden && !menuOpen;

  // Section links stay active on their sub-pages too (e.g. /notes/<slug>)
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href?: string) => {
    const isActive = href && isCurrent(href);
    return `squiggle squiggle-hover font-serif text-base transition-colors duration-200 ${
      isActive
        ? "text-[#8c63d1] font-semibold"
        : "text-[#6b6b6b] hover:text-[#333333]"
    }`;
  };

  const mobileLinkClass = (href?: string) => {
    const isActive = href && isCurrent(href);
    return `font-serif text-2xl transition-colors duration-200 ${
      isActive
        ? "text-[#8c63d1] font-semibold"
        : "text-[#6b6b6b] hover:text-[#333333]"
    }`;
  };

  // Résumé is an action (opens a PDF), so it gets an outlined pill
  const resumeClass =
    "group inline-flex items-center gap-1.5 font-serif font-medium text-[#8c63d1] border-[1.5px] border-[#cdb7f0] rounded-full transition-[color,background-color,border-color,transform] duration-150 ease-out hover:bg-[#f4ebff] hover:border-[#a582df] active:scale-[0.97]";

  // Same pen arrow as the "personal tools" link on the home page: grey at
  // rest, purple and nudged up and out on hover
  const resumeArrow = (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[13px] h-[13px] text-[#8f8f8f] transition-[transform,color] duration-200 group-hover:text-[#8c63d1] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-focus-visible:text-[#8c63d1]"
      aria-hidden="true"
    >
      <path d="M2.5 11.5C5.3 8.6 8.2 5.8 11.2 2.8M5.6 2.6C7.6 2.7 9.5 2.6 11.4 2.5C11.4 4.5 11.5 6.4 11.6 8.4" />
    </svg>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-[transform,opacity,background-color] ease-out will-change-transform ${
        scrolled ? "bg-white/70 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{
        opacity: navVisible && !isHidden ? 1 : 0,
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        // Getting out of the way is quick; coming back is a touch gentler
        transitionDuration: isHidden ? "240ms" : "300ms",
      }}
      onFocus={() => setHidden(false)}
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

        {/* Desktop links: the work, a divider, then about me */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-10" role="list">
            <li>
              <Link href={workHref} className={linkClass()}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/ai-labs" className={linkClass("/ai-labs")} aria-current={pathname === "/ai-labs" ? "page" : undefined}>
                AI Labs
              </Link>
            </li>
            <li>
              <Link href="/play" className={linkClass("/play")} aria-current={pathname === "/play" ? "page" : undefined}>
                Play
              </Link>
            </li>
            <li>
              <Link href="/notes" className={linkClass("/notes")} aria-current={isCurrent("/notes") ? "page" : undefined}>
                Notes
              </Link>
            </li>
          </ul>

          <span className="block w-px h-[18px] bg-[#dcd6e4]" aria-hidden="true" />

          <ul className="flex items-center gap-7" role="list">
            <li>
              <Link href="/about" className={linkClass("/about")} aria-current={pathname === "/about" ? "page" : undefined}>
                About
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${resumeClass} text-[15px] pl-4 pr-[15px] py-1.5`}
                aria-label="Download résumé (opens in new tab)"
              >
                Resume
                {resumeArrow}
              </a>
            </li>
          </ul>
        </div>

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
                href="/ai-labs"
                className={mobileLinkClass("/ai-labs")}
                onClick={() => setMenuOpen(false)}
              >
                AI Labs
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
              <Link
                href="/notes"
                className={mobileLinkClass("/notes")}
                onClick={() => setMenuOpen(false)}
              >
                Notes
              </Link>
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
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${resumeClass} text-xl px-6 py-2`}
                aria-label="Download résumé (opens in new tab)"
                onClick={() => setMenuOpen(false)}
              >
                Resume
                {resumeArrow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

interface LiveProject {
  slug: string;
  description: React.ReactNode;
  bgColor: string;
  image: string;
  imageAlt: string;
  passwordProtected?: boolean;
}

/**
 * The shipped case studies, each a hand-built route rather than data-driven —
 * see data/projects.ts's removal note. Kept here, not in data/projects.ts,
 * since this is the only place that still needs a summary of all of them.
 */
const LIVE_PROJECTS: LiveProject[] = [
  {
    slug: "bbq-nation",
    description: (
      <>
        I redesigned{" "}
        <strong className="font-semibold text-[#EA5B1E]">table booking</strong>{" "}
        for India&rsquo;s favourite{" "}
        <strong className="font-semibold text-[#EA5B1E]">barbecue chain</strong>
      </>
    ),
    bgColor: "#FFF1E8",
    image: "/images/bbq-nation.webp",
    imageAlt: "Barbeque Nation project mockup",
    passwordProtected: true,
  },
  {
    slug: "school-counselling",
    description: (
      <>
        I built a{" "}
        <strong className="font-semibold text-[#8C63D1]">dashboard</strong> to
        streamline{" "}
        <strong className="font-semibold text-[#8C63D1]">
          school counselling
        </strong>{" "}
        processes
      </>
    ),
    bgColor: "#f4ebff",
    image: "/images/school-counselling.webp",
    imageAlt: "School counselling project mockup",
    passwordProtected: true,
  },
  {
    slug: "walletwize",
    description: (
      <>
        I created a{" "}
        <strong className="font-semibold text-[#C9259A]">
          finance management
        </strong>{" "}
        app to simplify money for{" "}
        <strong className="font-semibold text-[#C9259A]">young adults</strong>
      </>
    ),
    bgColor: "#FFEDFB",
    image: "/images/finance-management.webp",
    imageAlt: "WalletWize project mockup",
  },
];

/**
 * From sm up, both cards in a row must end up the same height however much
 * a description wraps or a badge is present — so the title block reserves
 * three lines' worth of space (the longest description here wraps to three
 * at this card width), and the badge always occupies its row (just hidden,
 * not removed) rather than only when the target is protected. On phones the
 * cards stack, so neither is needed and the empty badge row collapses.
 *
 * On hover the mockup lifts and tilts, like the home page cards.
 */
export default function BrowseOtherProjects({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = LIVE_PROJECTS.filter((p) => p.slug !== currentSlug);

  return (
    <section className="max-w-5xl mx-auto px-6 pb-32">
      <h2 className="font-serif text-2xl sm:text-3xl text-[#4c4c4c] mb-10">
        Browse Other Projects
      </h2>
      {/* On phones each card is one coloured block with the title inside it.
          From sm up the title sits above the block and the mockup hangs out
          of its bottom, like the home page cards. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {others.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block"
          >
            <div
              className="relative rounded-[1.25rem] bg-[var(--card-bg)] pt-10 sm:rounded-none sm:bg-transparent sm:pt-0"
              style={{ "--card-bg": project.bgColor } as React.CSSProperties}
            >
              <div className="relative z-10 px-8 sm:mb-4 sm:min-h-[112px]">
                <p className="font-serif text-[28px] font-light text-[#4c4c4c] leading-[1.3]">
                  {project.description}
                </p>
              </div>
              <div className="rounded-[1.25rem] pt-4 px-8 pb-8 sm:bg-[var(--card-bg)] sm:pt-12 sm:pb-0">
                <p
                  className={`relative z-10 mb-6 sm:mb-8 flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8f8f8f] ${project.passwordProtected ? "" : "max-sm:hidden"}`}
                  style={{ visibility: project.passwordProtected ? "visible" : "hidden" }}
                  aria-hidden={!project.passwordProtected}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Password Protected
                </p>
                <div
                  className="sm:-mb-[100px] transition-[transform,filter] duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-1 group-hover:drop-shadow-[0_16px_20px_rgba(76,76,76,0.12)] group-focus-visible:-translate-y-2 group-focus-visible:rotate-1"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={730}
                    sizes="(min-width: 640px) 460px, calc(100vw - 112px)"
                    quality={90}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

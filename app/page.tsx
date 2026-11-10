import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";
import PortraitDraw from "@/components/PortraitDraw";

// Hero portrait animation. true = drawn from the crown down, then a circle drawn
// behind the head last (components/PortraitDraw.tsx). false = the original circle fade-in with
// the face sliding up into it.
const DRAW_PORTRAIT = true;

// How far a project card's image breaks out past the card (as a negative
// offset). 100% is the card's width, so (100vw - 100%) / 2 is the margin
// beside it; clipping to that keeps the image on screen at tablet widths.
const BREAKOUT = "calc(-1 * min(85px, (100vw - 100%) / 2 - 8px))";

// Hero text waits for the portrait: 750ms after the original, or starts early
// in the drawn version (it runs ~3.3s) so the words are readable while the
// portrait is still drawing.
const HERO_TEXT_DELAY = DRAW_PORTRAIT ? 600 : 750;

type WorkItem = {
  slug: string;
  title: string;
  description: React.ReactNode;
  tags: string[];
  bgColor: string;
  accentColor: string;
  image: string;
  imageWidth?: string;
  comingSoon?: boolean;
  passwordProtected?: boolean;
};

const workItems: WorkItem[] = [
  {
    slug: "bbq-nation",
    title: "Barbeque Nation",
    description: (
      <>
        I redesigned{" "}
        <strong className="font-semibold text-[#EA5B1E]">table booking</strong>{" "}
        for India&rsquo;s favourite{" "}
        <strong className="font-semibold text-[#EA5B1E]">barbecue chain</strong>
      </>
    ),
    tags: ["B2C", "Mobile", "Web"],
    bgColor: "#FFF1E8",
    accentColor: "#EA5B1E",
    image: "/images/bbq-nation.webp",
    passwordProtected: true,
  },
  {
    slug: "school-counselling",
    title: "CounselSync",
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
    tags: ["B2B", "EdTech"],
    bgColor: "#f4ebff",
    accentColor: "#8C63D1",
    image: "/images/school-counselling.webp",
    passwordProtected: true,
  },
  {
    slug: "walletwize",
    title: "WalletWize",
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
    tags: ["FinTech", "B2C"],
    bgColor: "#FFEDFB",
    accentColor: "#C9259A",
    image: "/images/finance-management.webp",
  },
  {
    slug: "ai-growth-engine",
    title: "AI Growth Engine",
    description: (
      <>
        I designed an agentic{" "}
        <strong className="font-semibold text-[#009294]">AI growth</strong>{" "}
        engine to automate{" "}
        <strong className="font-semibold text-[#009294]">
          organic search visibility
        </strong>
      </>
    ),
    tags: ["AI", "SaaS"],
    bgColor: "#E6FAFA",
    accentColor: "#00228a",
    image: "/images/ai-growth-engine.webp",
    comingSoon: true,
  },
];


export default function Home() {
  return (
    <div>
      <DottedBackground />
      {/* Hero */}
      <section
        className="max-w-5xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32"
        aria-labelledby="hero-heading"
      >
        {/* Portrait */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            {DRAW_PORTRAIT ? (
              <div className="pd-hover w-[18rem] h-[18rem] sm:w-[19.8rem] sm:h-[19.8rem] relative">
                <PortraitDraw />
              </div>
            ) : (
              <>
                {/* Circle border — fades in first */}
                <AnimateIn
                  trigger="load"
                  animation="fade-in"
                  duration={500}
                  delay={250}
                 
                >
                  <div className="w-[18rem] h-[18rem] sm:w-[19.8rem] sm:h-[19.8rem] relative">
                    <Image
                      src="/images/portrait-frame.webp"
                      alt=""
                      fill
                      className="object-contain"
                      priority
                      aria-hidden="true"
                    />
                  </div>
                </AnimateIn>

                {/* Face — slides up into the circle from below, overflow visible at top */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "inset(-50% -50% 0 -50%)", borderRadius: "50%" }}
                >
                  <AnimateIn
                    trigger="load"
                    animation="fade-slide-up"
                    slideDistance={300}
                    duration={500}
                    delay={500}
                   
                    className="absolute bottom-0 left-0 w-full"
                  >
                    <div className="relative w-full" style={{ paddingBottom: "118.2%" }}>
                      <Image
                        src="/images/portrait-only.webp"
                        alt="Portrait of Bhagyashree Phadnis"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />
                    </div>
                  </AnimateIn>
                </div>
              </>
            )}
          </div>
        </div>

        {/* "Hey, I'm Bhagyashree!" */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={20}
          duration={500}
          delay={HERO_TEXT_DELAY}
         
          className="max-w-[940px]"
        >
          <p className="font-serif text-[28px] text-[#6b6b6b] mb-4">
            Hey, I&rsquo;m Bhagyashree!
          </p>
        </AnimateIn>

        {/* "I'm an engineer turned product designer..." */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={20}
          duration={500}
          delay={HERO_TEXT_DELAY + 80}
         
          className="max-w-[940px]"
        >
          <h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#4c4c4c] leading-[1.15] mb-6 max-w-[90%]"
          >
            I&rsquo;m an{" "}
            <strong className="font-medium text-[#a582df]">engineer</strong>{" "}
            turned product designer with a{" "}
            <strong className="font-medium text-[#a582df]">
              master&rsquo;s in HCI
            </strong>
          </h1>
        </AnimateIn>

        {/* "4+ years designing..." */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={20}
          duration={500}
          delay={HERO_TEXT_DELAY + 160}
         
          className="max-w-[940px]"
        >
          <p className="font-serif text-[24px] text-[#8f8f8f] leading-relaxed tracking-normal max-w-2xl">
            4+ years designing across EdTech, consumer, and AI, currently at
            Lollypop Design Studio.
            <br />
            On the side, I build{" "}
            {/* Grey at rest like the text around it, set apart by its weight and a
                pen arrow; on hover it turns purple, the squiggle draws in under the
                words and the arrow nudges up and out */}
            <Link
              href="/ai-labs"
              className="group whitespace-nowrap font-medium text-[#6b6b6b] transition-colors duration-200 hover:text-[#8c63d1] focus-visible:text-[#8c63d1]"
            >
              <span className="squiggle squiggle-hover">personal tools</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="ml-1 mr-1 inline-block align-baseline transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
              >
                <path
                  d="M2.5 11.5C5.3 8.6 8.2 5.8 11.2 2.8M5.6 2.6C7.6 2.7 9.5 2.6 11.4 2.5C11.4 4.5 11.5 6.4 11.6 8.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>{" "}
            to help me navigate my life.
          </p>
        </AnimateIn>
      </section>

      {/* My Latest Work */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 pb-24 overflow-visible scroll-mt-24"
        aria-labelledby="work-heading"
      >
        {/* Section heading */}
        <AnimateIn
          trigger="scroll"
          animation="fade-slide-up"
          slideDistance={40}
          duration={500}
         
          threshold={0.1}
          className="relative text-center mb-32"
        >
          <h2
            id="work-heading"
            className="font-serif text-[40px] font-medium text-[#6b6b6b]"
          >
            My Latest Work
          </h2>
        </AnimateIn>

        {/* Project cards */}
        <div className="space-y-10 md:space-y-[140px]">
          {workItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const className = `group block${item.comingSoon ? "" : " cursor-pointer"}`;
            const card = (children: React.ReactNode) =>
              item.comingSoon ? (
                <div className={className}>{children}</div>
              ) : (
                <Link href={`/work/${item.slug}`} aria-label={`View ${item.title} project`} className={className}>{children}</Link>
              );
            return (
              <AnimateIn
                key={item.slug}
                trigger="scroll"
                animation="fade-slide-up"
                slideDistance={40}
                duration={500}
               
                threshold={0.1}
              >
              {card(
                <>
                {/* Mobile: stacked layout */}
                <div
                  className="md:hidden rounded-[1.25rem] px-6 py-10"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <p className="font-serif text-[28px] font-light text-[#4c4c4c] leading-[1.3] mb-2">
                    {item.description}
                  </p>
                  {item.comingSoon && (
                    <p className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
                      Coming Soon
                    </p>
                  )}
                  {item.passwordProtected && (
                    <p className="flex items-center gap-1.5 text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Password Protected
                    </p>
                  )}
                  <Image
                    src={item.image}
                    alt={`${item.title} project mockup`}
                    width={1200}
                    height={730}
                    sizes="(min-width: 768px) 55vw, calc(100vw - 96px)"
                    quality={90}
                    className="w-full h-auto"
                  />
                </div>

                {/* Desktop/Tablet: absolute positioned breakout layout */}
                <div
                  className="hidden md:block relative rounded-[1.25rem] px-12 py-16 h-[350px]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {/* Text */}
                  <div
                    className="absolute w-[300px]"
                    style={{
                      top: -25,
                      left: isEven ? 50 : undefined,
                      right: isEven ? undefined : 50,
                    }}
                  >
                    <p className="font-serif text-[35px] font-light text-[#4c4c4c] leading-[1.3]">
                      {item.description}
                    </p>
                    {!item.comingSoon && (
                      <span
                        aria-hidden="true"
                        className="mt-5 inline-flex items-center gap-1.5 font-script text-[24px] opacity-0 -translate-x-2 transition duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
                        style={{ color: item.accentColor }}
                      >
                        View case study
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" className="mt-1">
                          <path
                            d="M1 7C7 6 13 6.5 20 6M15 2C17 4 19 5 21 6C19 7 17 9 15 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </div>

                  {/* Coming Soon label */}
                  {item.comingSoon && (
                    <p
                      className="absolute text-xs tracking-widest text-[#8f8f8f] uppercase"
                      style={{
                        bottom: 50,
                        left: isEven ? 50 : undefined,
                        right: isEven ? undefined : 50,
                      }}
                    >
                      Coming Soon
                    </p>
                  )}

                  {/* Password Protected label */}
                  {item.passwordProtected && (
                    <p
                      className="absolute w-[300px] flex items-center gap-1.5 text-xs tracking-widest text-[#8f8f8f] uppercase"
                      style={{
                        bottom: 50,
                        left: isEven ? 50 : undefined,
                        right: isEven ? undefined : 50,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Password Protected
                    </p>
                  )}

                  {/* Image — breaking out of card; lifts and tilts away from the text on hover.
                      It breaks out by up to 85px, but never further than the page margin
                      beside the card (less 8px), so it doesn't run off narrower screens. */}
                  <div
                    className={`absolute transition-transform duration-200 ease-out group-hover:duration-300 group-hover:ease-playful group-hover:-translate-y-2 ${isEven ? "group-hover:rotate-1" : "group-hover:-rotate-1"} ${item.imageWidth ? "" : "md:w-[55%] lg:w-[63%]"}`}
                    style={{
                      top: -75,
                      right: isEven ? BREAKOUT : undefined,
                      left: isEven ? undefined : BREAKOUT,
                      ...(item.imageWidth ? { width: item.imageWidth } : {}),
                    }}
                  >
                    {/* Shadow: a drop-shadowed copy under the mockup that only fades in,
                        so the browser never re-filters the image while it moves */}
                    <Image
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      width={1200}
                      height={730}
                      sizes="(min-width: 1072px) 640px, (min-width: 768px) 60vw, 100vw"
                      quality={90}
                      className="absolute inset-0 w-full h-auto opacity-0 drop-shadow-[0_16px_20px_rgba(76,76,76,0.12)] transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:duration-300"
                    />
                    <Image
                      src={item.image}
                      alt={`${item.title} project mockup`}
                      width={1200}
                      height={730}
                      sizes="(min-width: 1072px) 640px, (min-width: 768px) 60vw, 100vw"
                      quality={90}
                      className="relative w-full h-auto"
                    />
                  </div>
                </div>
              </>
              )}
              </AnimateIn>
            );
          })}
        </div>
      </section>

    </div>
  );
}

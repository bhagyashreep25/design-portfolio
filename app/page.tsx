import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const workItems = [
  {
    slug: "ai-growth-engine",
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
    tags: ["B2B", "EdTech"],
    bgColor: "#f4ebff",
    accentColor: "#00228a",
    image: "/images/school-counselling.webp",
    comingSoon: true,
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
    tags: ["FinTech", "B2C"],
    bgColor: "#FFEDFB",
    accentColor: "#C9259A",
    image: "/images/finance-management.webp",
  },
  {
    slug: "clover-ai",
    description: (
      <>
        I designed an{" "}
        <strong className="font-semibold text-[#079737]">AI-powered</strong> app
        to enhance{" "}
        <strong className="font-semibold text-[#079737]">
          health literacy
        </strong>{" "}
        for all
      </>
    ),
    tags: ["HealthTech", "AI"],
    bgColor: "#EDFFF0",
    accentColor: "#079737",
    image: "/images/health-literacy.webp",
    imageWidth: "53.5%",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="max-w-5xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32"
        aria-labelledby="hero-heading"
      >
        {/* Portrait with angled text */}
        <div className="flex justify-center mb-10">
          <div className="relative" style={{ transform: "scale(0.95)" }}>
            {/* Circle border — fades in first */}
            <AnimateIn
              trigger="load"
              animation="fade-in"
              duration={500}
              delay={250}
              easing="ease-out"
            >
              <div className="w-[20rem] h-[20rem] sm:w-[22rem] sm:h-[22rem] relative">
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
                easing="ease-out"
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

            {/* Angled Caveat text — absolutely positioned to overlap portrait */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <AnimateIn
                trigger="load"
                animation="fade-slide-up"
                slideDistance={300}
                duration={500}
                delay={750}
                easing="ease-out"
              >
                <p
                  className="font-script text-[30px] text-[#8f8f8f] whitespace-nowrap"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  an engineer turned product designer
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>

        {/* "Hey, I'm Bhagyashree!" */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={300}
          duration={500}
          delay={1000}
          easing="ease-out"
          className="max-w-[940px]"
        >
          <p className="font-serif text-[28px] text-[#6b6b6b] mb-4">
            Hey, I&rsquo;m Bhagyashree!
          </p>
        </AnimateIn>

        {/* "I specialize in creating..." */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={300}
          duration={500}
          delay={1250}
          easing="ease-out"
          className="max-w-[940px]"
        >
          <h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#4c4c4c] leading-[1.15] mb-6 max-w-[90%]"
          >
            I specialize in creating{" "}
            <strong className="font-medium text-[#a582df]">
              visually appealing
            </strong>
            , data-driven experiences that{" "}
            <strong className="font-medium text-[#a582df]">
              enhance the lives
            </strong>{" "}
            of users
          </h1>
        </AnimateIn>

        {/* "I've helped companies..." */}
        <AnimateIn
          trigger="load"
          animation="fade-slide-up"
          slideDistance={300}
          duration={500}
          delay={1500}
          easing="ease-out"
          className="max-w-[940px]"
        >
          <p className="font-serif text-[24px] text-[#8f8f8f] leading-relaxed tracking-normal max-w-2xl">
            I&rsquo;ve helped companies balance usability &amp; aesthetics,
            increase customer satisfaction and decrease error rates.
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
          easing="ease-out"
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
            const className = `group block transition-transform duration-300 ease-out hover:scale-[1.07]${item.comingSoon ? "" : " cursor-pointer"}`;
            const card = (children: React.ReactNode) =>
              item.comingSoon ? (
                <div className={className}>{children}</div>
              ) : (
                <Link href={`/work/${item.slug}`} aria-label={`View ${item.slug} project`} className={className}>{children}</Link>
              );
            return (
              <AnimateIn
                key={item.slug}
                trigger="scroll"
                animation="fade-slide-up"
                slideDistance={40}
                duration={500}
                easing="ease-out"
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
                  <Image
                    src={item.image}
                    alt={`${item.slug} project mockup`}
                    width={600}
                    height={450}
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

                  {/* Image — breaking out of card */}
                  <div
                    className={`absolute ${item.imageWidth ? "" : "md:w-[55%] lg:w-[63%]"}`}
                    style={{
                      top: -75,
                      right: isEven ? -85 : undefined,
                      left: isEven ? undefined : -85,
                      ...(item.imageWidth ? { width: item.imageWidth } : {}),
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.slug} project mockup`}
                      width={600}
                      height={450}
                      className="w-full h-auto"
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
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";

export const metadata: Metadata = {
  title: "AI Labs — Bhagyashree Phadnis",
  description:
    "AI-powered tools built from scratch by Bhagyashree Phadnis — karaoke tracks, coffee tracking, Figma plugins, and meal planning.",
};

const labItems = [
  {
    title: (
      <>
        <span className="font-light">strippd</span> — Karaoke Track Generator
      </>
    ),
    oneLiner: "Sing it your way",
    description:
      "A web tool that generates karaoke tracks from any song. Free karaoke tracks online sound terrible — and bad backing tracks make even good singers sound off. So I built one that doesn't compromise the performance.",
    tags: ["Website"],
    image: "/images/ai-labs/strippd.png",
    imageAlt: "strippd karaoke track generator",
    mediaType: "image" as const,
    tryItUrl: "https://bagsphadnis-strippd.hf.space/",
  },
  {
    title: (
      <>
        <span className="font-light">brew&rsquo;d</span> — Coffee Tracker
      </>
    ),
    oneLiner: "Every blend, remembered",
    description:
      "A minimal coffee tracker for logging every blend I try across roasters all over the country. My notes app was chaos. This just feels right — cute, hands-free, and built for someone who treats coffee like a quiet obsession.",
    tags: ["App"],
    image: "/images/ai-labs/coffee-tracker.gif",
    imageAlt: "brew'd coffee tracker app demo",
    mediaType: "phone" as const,
    tryItUrl: null,
  },
  {
    title: (
      <>
        <span className="font-light">Link&rsquo;d</span> — Figma Prototype Link
        Grabber
      </>
    ),
    oneLiner: "Skip the click-hunt",
    description:
      "A Figma plugin that scans every section and prototype flow on a page and surfaces all shareable links in one place. No more selecting each frame, hitting share, copying, repeating. Just open, grab, go.",
    tags: ["Plugin"],
    image: "/images/ai-labs/linkd.gif",
    imageAlt: "Link'd Figma plugin demo",
    mediaType: "image" as const,
    tryItUrl: null,
  },
  {
    title: (
      <>
        <span className="font-light">Sage</span> — Meal Planner
      </>
    ),
    oneLiner: "My life, my kitchen, my rules",
    description:
      "A meal planner that thinks the way I do — start with the day, then layer in lunch and dinner around it. Keeps my go-to recipes in one spot, builds shopping lists without friction. Not another meal app that tries to plan my whole life — just one that fits mine.",
    tags: ["App"],
    image: "/images/ai-labs/meal-planner.gif",
    imageAlt: "Sage meal planner app demo",
    mediaType: "phone" as const,
    tryItUrl: null,
  },
];

export default function AILabs() {
  return (
    <div>
      <DottedBackground />

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-5">
            If it doesn&rsquo;t exist, vibe-code it
          </h1>
        </AnimateIn>

        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            AI-powered tools I&rsquo;ve built from scratch to fit the way I
            actually work — because the right tool is the one that works how I
            work.
          </p>
        </AnimateIn>
      </header>

      {/* Experiments */}
      {labItems.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <AnimateIn
            key={index}
            trigger="scroll"
            animation="fade-in"
            duration={500}
            threshold={0.1}
          >
            <section className={`flex items-center ${index === 0 ? "py-10" : "min-h-screen"}`}>
              <div className="max-w-5xl mx-auto px-6 w-full">
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-10 md:gap-16 items-center`}
                >
                  {/* Media */}
                  <div className={`w-full flex justify-center ${item.mediaType === "image" ? "md:w-[55%]" : "md:w-1/2"}`}>
                    {item.mediaType === "phone" && item.image ? (
                      /* iPhone mockup */
                      <div className="relative w-[240px] sm:w-[270px]">
                        <div className="relative bg-[#1a1a1a] rounded-[50px] p-[10px] shadow-2xl">
                          <div
                            className="relative rounded-[40px] overflow-hidden bg-black"
                            style={{ aspectRatio: "9/19.5" }}
                          >
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              width={390}
                              height={844}
                              className="w-full h-full object-cover"
                              unoptimized={item.image.endsWith(".gif")}
                            />
                          </div>
                        </div>
                      </div>
                    ) : item.mediaType === "image" && item.image ? (
                      /* Regular image */
                      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          width={800}
                          height={500}
                          className="w-full h-auto"
                          unoptimized={item.image.endsWith(".gif")}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full aspect-[16/10] rounded-2xl"
                        style={{ backgroundColor: "#e8e8e8" }}
                      />
                    )}
                  </div>

                  {/* Text content */}
                  <div className={`w-full ${item.mediaType === "image" ? "md:w-[45%]" : "md:w-1/2"}`}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="font-serif text-[28px] font-medium text-[#4c4c4c] leading-tight">
                        {item.title}
                      </h2>
                      <div className="flex gap-2 shrink-0 pt-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium tracking-wide text-[#8C63D1] bg-[#f4ebff] px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-serif text-lg text-[#4c4c4c] mb-3">
                      {item.oneLiner}
                    </p>

                    <p className="text-[15px] text-[#8f8f8f] leading-relaxed">
                      {item.description}
                    </p>

                    {item.tryItUrl && (
                      <a
                        href={item.tryItUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#8C63D1] hover:text-[#6b45b0] transition-colors mt-5 text-[15px] font-medium"
                      >
                        Try it out
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                          <path d="M3.5 1.75H12.25V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12.25 1.75L1.75 12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </AnimateIn>
        );
      })}
    </div>
  );
}

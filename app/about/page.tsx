import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";

const polaroids = [
  { src: "/images/about/1.JPG", alt: "Smiling on a waterfront stone promenade, wearing a beanie and a black-and-white plaid cardigan", rotate: -3 },
  { src: "/images/about/2.jpg", alt: "A river rushing over a weir past a stone harbor wall, a museum building in the background", rotate: 2 },
  { src: "/images/about/3.jpg", alt: "Black-and-white ink illustration of a face dissolving into abstract jigsaw shapes, an original drawing signed 'Bhags'", rotate: -1.5 },
  { src: "/images/about/4.jpg", alt: "Ocean waves breaking at sunset under an orange sky", rotate: 3 },
  { src: "/images/about/5.png", alt: "Dusk skyline of bare trees and the Washington Monument silhouetted against an orange sunset", rotate: -2 },
  { src: "/images/about/6.JPG", alt: "A latte with leaf-pattern foam art next to an open laptop and a glass of water in a cafe", rotate: 1.5 },
  { src: "/images/about/7.JPG", alt: "A coastal cliffside trail overlooking the ocean, with wooden steps leading down to the water", rotate: -2.5 },
  { src: "/images/about/8.JPG", alt: "A Christmas market stall stocked with fruit crates and gift baskets under a glass-roofed Victorian arcade", rotate: 2.5 },
  { src: "/images/about/9.JPG", alt: "A giant illuminated globe suspended inside a wood-panelled library hall lined with marble busts", rotate: -1 },
  { src: "/images/about/10.JPG", alt: "The U.S. Capitol dome viewed from the plaza, with two people walking up the path", rotate: 3 },
  { src: "/images/about/11.JPG", alt: "Boathouses and docks along a river on a sunny day, with a motorboat moored at the dock", rotate: -2 },
  { src: "/images/about/12.jpg", alt: "Silhouetted in a stained-glass window archway, overlooking a city street below", rotate: 1 },
  { src: "/images/about/13.PNG", alt: "A rainy courtyard with a palm tree, a lion-head wall fountain, and outdoor cafe seating", rotate: -3 },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bhagyashree Phadnis — an engineer turned product designer based in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
      <DottedBackground />
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-10">
          A glimpse into my world
        </h1>
      </AnimateIn>

      {/* Polaroid Marquee */}
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={200} easing="ease-out">
        <div className="overflow-hidden -mx-6 mb-14 sm:mb-20">
          <div className="marquee-track gap-8 py-6">
            {[...polaroids, ...polaroids].map((photo, i) => (
              <div
                key={i}
                className="polaroid shrink-0 bg-white p-3 pb-12 shadow-md"
                style={{ "--r": `${photo.rotate}deg`, width: 220 } as React.CSSProperties}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Intro line */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <p className="font-serif text-[28px] text-[#6b6b6b] mb-12 sm:mb-16">
          I&rsquo;m Bhagyashree, a Product Designer based in Mumbai.
        </p>
      </AnimateIn>

      {/* Cards row — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 sm:mb-20">
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <div
            className="rounded-2xl border border-[#e0e0e0] bg-[#fafafa] p-7 sm:p-8 h-full"
            style={{ "--hu-bg": "#fafafa" } as React.CSSProperties}
          >
            <h3 className="font-sans text-sm font-medium tracking-[0.12em] uppercase text-[#4c4c4c] mb-4">
              What Inspires Me
            </h3>
            <p className="text-base text-[#6b6b6b] leading-[1.8]">
              I was raised in a household that{" "}
              <span className="hand-underline">appreciates art</span>. Be it music, cinema,
              or the written word. And I held onto every ounce that I could. Not a
              day goes by without me losing myself in a song, movie, or book.
              Nothing inspires me as much as art, no matter the medium.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <div
            className="rounded-2xl border border-[#e0e0e0] bg-[#f9f5ff] p-7 sm:p-8 h-full"
            style={{ "--hu-bg": "#f9f5ff" } as React.CSSProperties}
          >
            <h3 className="font-sans text-sm font-medium tracking-[0.12em] uppercase text-[#4c4c4c] mb-4">
              What Motivates Me
            </h3>
            <p className="text-base text-[#6b6b6b] leading-[1.8]">
              I am a very observant individual, sensitive to my surroundings;
              especially to the company around me.{" "}
              <span className="hand-underline">People always fascinate me</span>. I
              take great pride in the fact that I can appreciate the diversity of
              people around me. I imbibe profound motivation from the people around
              me.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <div
            className="rounded-2xl border border-[#e0e0e0] bg-[#fafafa] p-7 sm:p-8 h-full"
            style={{ "--hu-bg": "#fafafa" } as React.CSSProperties}
          >
            <h3 className="font-sans text-sm font-medium tracking-[0.12em] uppercase text-[#4c4c4c] mb-4">
              What Drives Me
            </h3>
            <p className="text-base text-[#6b6b6b] leading-[1.8]">
              I am deeply passionate about design, technology, and innovation. In
              today&rsquo;s times, the possibilities are truly endless. There&rsquo;s
              a unique satisfaction in creating something that{" "}
              <span className="hand-underline">nobody&rsquo;s ever dreamed of</span>.
              And that feeling is something that I&rsquo;m constantly chasing.
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Why Design — editorial highlight quote */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <blockquote className="flex items-start gap-4 sm:gap-6 mb-16 sm:mb-20">
          {/* Decorative open quote — magazine style */}
          <svg
            className="shrink-0"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M52 30C52 30 28 34 28 58C28 58 34 54 42 54C50 54 56 60 56 70C56 80 48 88 38 88C28 88 18 80 18 66C18 44 36 28 52 30Z"
              fill="#8C63D1"
              fillOpacity="0.15"
            />
            <path
              d="M102 30C102 30 78 34 78 58C78 58 84 54 92 54C100 54 106 60 106 70C106 80 98 88 88 88C78 88 68 80 68 66C68 44 86 28 102 30Z"
              fill="#8C63D1"
              fillOpacity="0.15"
            />
          </svg>
          <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug pt-6">
            Fuelled by art, ignited by the people around me, and driven by
            technology,{" "}
            <strong className="font-bold text-[#8C63D1]">
              Product Design &amp; Vibe Engineering
            </strong>{" "}
            allows me to unite my inspiration, motivation, and passion. I wish to
            leverage this power to enhance the lives of those around me.
          </p>
        </blockquote>
      </AnimateIn>

      {/* Sticky note — What am I doing these days? */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div
          className="pinned-note relative bg-[#f9f5ff] rounded-lg shadow-md p-8 sm:p-10"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="10" r="6" fill="#a582df" />
              <circle cx="12" cy="10" r="3" fill="#8C63D1" />
              <line x1="12" y1="16" x2="12" y2="22" stroke="#8f8f8f" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="font-script text-[26px] text-[#4c4c4c] mb-5 text-center">
            What am I doing these days?
          </h3>
          <ul className="text-[15px] text-[#6b6b6b] leading-[1.8] space-y-2">
            <li className="flex items-start gap-2"><span className="emoji emoji-stir shrink-0 mt-0.5">&#9749;</span> Brewing my own cup of coffee with a trusty old aeropress</li>
            <li className="flex items-start gap-2"><span className="emoji emoji-flicker shrink-0 mt-0.5">&#9889;</span> Desperately waiting for the new Harry Potter show (while complaining about how the Marauders show should&rsquo;ve been greenlit)</li>
            <li className="flex items-start gap-2"><span className="emoji emoji-bounce shrink-0 mt-0.5">&#127911;</span> Obsessing over the musical genius that is Tame Impala</li>
            <li className="flex items-start gap-2"><span className="emoji emoji-fly shrink-0 mt-0.5">&#9992;&#65039;</span> Planning my next getaway</li>
            <li className="flex items-start gap-2"><span className="emoji emoji-lift shrink-0 mt-0.5">&#127947;&#65039;</span> Trying to maintain a consistent workout routine</li>
          </ul>
        </div>
      </AnimateIn>
    </div>
  );
}

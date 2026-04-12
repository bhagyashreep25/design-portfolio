import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";

const polaroids = [
  { src: "/images/about/1.JPG", alt: "Messy archive photo 1", rotate: -3 },
  { src: "/images/about/2.jpg", alt: "Messy archive photo 2", rotate: 2 },
  { src: "/images/about/3.jpg", alt: "Messy archive photo 3", rotate: -1.5 },
  { src: "/images/about/4.jpg", alt: "Messy archive photo 4", rotate: 3 },
  { src: "/images/about/5.png", alt: "Messy archive photo 5", rotate: -2 },
  { src: "/images/about/6.JPG", alt: "Messy archive photo 6", rotate: 1.5 },
  { src: "/images/about/7.JPG", alt: "Messy archive photo 7", rotate: -2.5 },
  { src: "/images/about/8.JPG", alt: "Messy archive photo 8", rotate: 2.5 },
  { src: "/images/about/9.JPG", alt: "Messy archive photo 9", rotate: -1 },
  { src: "/images/about/10.JPG", alt: "Messy archive photo 10", rotate: 3 },
  { src: "/images/about/11.JPG", alt: "Messy archive photo 11", rotate: -2 },
  { src: "/images/about/12.jpg", alt: "Messy archive photo 12", rotate: 1 },
  { src: "/images/about/13.PNG", alt: "Messy archive photo 13", rotate: -3 },
];

export const metadata: Metadata = {
  title: "About — Bhagyashree Phadnis",
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
                className="shrink-0 bg-white p-3 pb-12 shadow-md"
                style={{ transform: `rotate(${photo.rotate}deg)`, width: 220 }}
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
          <div className="rounded-2xl border border-[#e0e0e0] bg-[#fafafa] p-7 sm:p-8 h-full">
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
          <div className="rounded-2xl border border-[#e0e0e0] bg-[#f9f5ff] p-7 sm:p-8 h-full">
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
          <div className="rounded-2xl border border-[#e0e0e0] bg-[#fafafa] p-7 sm:p-8 h-full">
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

      {/* Sticky notes row */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 sm:gap-10">
        {/* Note 1 — What am I doing these days? */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1} className="flex-1">
          <div
            className="relative bg-[#f9f5ff] rounded-lg shadow-md p-8 sm:p-10 h-full"
            style={{ transform: "rotate(-1.5deg)" }}
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
              <li className="flex items-start gap-2"><span className="shrink-0 mt-0.5">&#9749;</span> Brewing my own coffee sourced from all over the country</li>
              <li className="flex items-start gap-2"><span className="shrink-0 mt-0.5">&#10024;</span> Building fun stuff with Claude</li>
              <li className="flex items-start gap-2"><span className="shrink-0 mt-0.5">&#9889;</span> Desperately waiting for the new Harry Potter show &amp; Spiderman Movie</li>
              <li className="flex items-start gap-2"><span className="shrink-0 mt-0.5">&#9992;&#65039;</span> Planning my next getaway</li>
              <li className="flex items-start gap-2"><span className="shrink-0 mt-0.5">&#127947;&#65039;</span> Trying to maintain a consistent workout routine</li>
            </ul>
          </div>
        </AnimateIn>

        {/* Note 2 — Weapons in my arsenal */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1} className="sm:w-[300px] shrink-0">
          <div
            className="relative bg-[#f5f5f5] rounded-lg shadow-md p-8 sm:p-10 h-full"
            style={{ transform: "rotate(2deg)" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="10" r="6" fill="#c0c0c0" />
                <circle cx="12" cy="10" r="3" fill="#999" />
                <line x1="12" y1="16" x2="12" y2="22" stroke="#8f8f8f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-script text-[26px] text-[#4c4c4c] mb-5 text-center">
              Weapons in my arsenal
            </h3>
            <ul className="text-[15px] text-[#6b6b6b] leading-[1.8] space-y-2">
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5Z" fill="#F24E1E"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2Z" fill="#FF7262"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" fill="#1ABCFE"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0Z" fill="#0ACF83"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5Z" fill="#A259FF"/></svg>
                Figma
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.308 3.616l-3.139 5.458c-.16.278-.018.634.283.734l5.42 1.776a.428.428 0 01-.04.823l-5.478 1.615c-.287.084-.424.413-.282.68l3.3 5.376a.428.428 0 01-.592.572l-4.748-3.108c-.262-.172-.605-.05-.7.238L9.695 23.2a.428.428 0 01-.822-.028l-1.52-5.606c-.078-.29-.39-.44-.666-.315L1.414 19.68a.428.428 0 01-.556-.6l2.953-5.142c.16-.278.018-.634-.283-.734L.736 11.94a.428.428 0 01.032-.82l5.985-1.85c.283-.088.415-.41.274-.672L4.28 3.736a.428.428 0 01.592-.572l4.748 3.108c.262.172.605.05.7-.238L11.957.614a.428.428 0 01.822.028l1.52 5.606c.078.29.39.44.666.315l2.767-1.516a.428.428 0 01.576.569z" fill="#D4A27F"/></svg>
                Claude
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none"><mask id="vsc" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M70.913 99.317a6.2 6.2 0 004.863-.637l19.086-9.534A6.25 6.25 0 0098.1 83.6V16.4a6.25 6.25 0 00-3.238-5.546L75.776 1.32a6.2 6.2 0 00-7.083.735L27.874 37.958 11.58 26.22a4.15 4.15 0 00-5.3.26L1.63 30.874a4.17 4.17 0 00-.002 6.252L16.19 50 1.628 62.874a4.17 4.17 0 00.002 6.252l4.65 4.394a4.15 4.15 0 005.3.26l16.294-11.738 40.819 35.903a6.19 6.19 0 002.22 1.372zM75.018 27.2L45.369 50l29.649 22.8V27.2z" fill="#fff"/></mask><g mask="url(#vsc)"><path d="M94.862 10.835L75.738 1.302a6.2 6.2 0 00-7.083.735L1.628 62.874a4.17 4.17 0 00.002 6.252l4.65 4.394a4.15 4.15 0 005.3.26L96.39 12.183a6.25 6.25 0 00-1.527-1.348z" fill="#0065A9"/><path d="M94.862 89.165L75.738 98.698a6.2 6.2 0 01-7.083-.735L1.628 37.126a4.17 4.17 0 01.002-6.252l4.65-4.394a4.15 4.15 0 015.3-.26l84.81 61.597a6.25 6.25 0 01-1.527 1.348z" fill="#007ACC"/><path d="M75.738 98.698a6.2 6.2 0 01-7.083-.735 6.25 6.25 0 006.25-6.25V8.287a6.25 6.25 0 00-6.25-6.25 6.2 6.2 0 017.083-.735l19.124 9.533A6.25 6.25 0 0198.1 16.38v67.24a6.25 6.25 0 01-3.238 5.545L75.738 98.698z" fill="#1F9CF0"/></g></svg>
                VS Code
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10Z" fill="#333"/></svg>
                GitHub
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5Z" fill="#333"/><path d="M2 17l10 5 10-5" stroke="#333" strokeWidth="1.5" fill="none"/><path d="M2 12l10 5 10-5" stroke="#333" strokeWidth="1.5" fill="none"/></svg>
                Vercel
              </li>
            </ul>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Play — Bhagyashree Phadnis",
  description:
    "Graphic design and illustration work by Bhagyashree Phadnis — posters, branding, and visual explorations.",
};

const leftColumn = [
  { src: "/images/illustrations/voix-poster-1.webp", alt: "Voix poster design 1", width: 1374, height: 2056 },
  { src: "/images/illustrations/voix-tote.webp", alt: "Voix tote bag mockup", width: 3000, height: 2250 },
  { src: "/images/illustrations/melancholy-wall.webp", alt: "Melancholy wall treatment installation", width: 1920, height: 1080 },
  { src: "/images/illustrations/melancholy-phone-logo.gif", alt: "Melancholy phone logo mockup", width: 1190, height: 1684 },
];

const rightColumn = [
  { src: "/images/illustrations/voix-poster-2.webp", alt: "Voix poster design 2", width: 1375, height: 2056 },
  { src: "/images/illustrations/voix-notebook.webp", alt: "Voix notebook design", width: 4000, height: 3000 },
  { src: "/images/illustrations/melancholy-poster.webp", alt: "Melancholy poster design", width: 863, height: 1290 },
  { src: "/images/illustrations/melancholy-logo.gif", alt: "Melancholy animated logo", width: 794, height: 480 },
];

export default function PlayPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-5">
            Flexing the graphic design muscle
          </h1>
        </AnimateIn>
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            Design projects outside of product &mdash; posters, branding,
            illustrations, and visual experiments.
          </p>
        </AnimateIn>
      </header>

      <div className="flex gap-4">
        {[leftColumn, rightColumn].map((column, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {column.map((img) => (
              <AnimateIn key={img.src} trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
                <figure>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto rounded-lg"
                    unoptimized={img.src.endsWith(".gif")}
                  />
                </figure>
              </AnimateIn>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

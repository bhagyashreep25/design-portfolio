import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";
import Gallery, { type Piece } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Play",
  description:
    "Graphic design and illustration work by Bhagyashree Phadnis — posters, branding, and visual explorations.",
};

const leftColumn: Piece[] = [
  { src: "/images/illustrations/voix-poster-1.webp", alt: "Voix poster design 1", caption: "Voix \u00b7 Poster", width: 1374, height: 2056 },
  { src: "/images/illustrations/voix-tote.webp", alt: "Voix tote bag mockup", caption: "Voix \u00b7 Tote bag", width: 3000, height: 2250 },
  { src: "/images/illustrations/melancholy-wall.webp", alt: "Melancholy wall treatment installation", caption: "Melancholy \u00b7 Wall installation", width: 1920, height: 1080 },
  { src: "/images/illustrations/melancholy-phone-logo-poster.webp", video: "/images/illustrations/melancholy-phone-logo.mp4", alt: "Melancholy phone logo mockup", caption: "Melancholy \u00b7 Logo on phone", width: 1190, height: 1684 },
];

const rightColumn: Piece[] = [
  { src: "/images/illustrations/voix-poster-2.webp", alt: "Voix poster design 2", caption: "Voix \u00b7 Poster", width: 1375, height: 2056 },
  { src: "/images/illustrations/voix-notebook.webp", alt: "Voix notebook design", caption: "Voix \u00b7 Notebook", width: 4000, height: 3000 },
  { src: "/images/illustrations/melancholy-poster.webp", alt: "Melancholy poster design", caption: "Melancholy \u00b7 Poster", width: 863, height: 1290 },
  { src: "/images/illustrations/melancholy-logo-poster.webp", video: "/images/illustrations/melancholy-logo.mp4", alt: "Melancholy animated logo", caption: "Melancholy \u00b7 Animated logo", width: 794, height: 480 },
];

export default function PlayPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <DottedBackground />
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

      <Gallery columns={[leftColumn, rightColumn]} />
    </div>
  );
}

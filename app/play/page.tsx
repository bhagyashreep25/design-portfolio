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
  { src: "/images/illustrations/voix-poster-1.webp", alt: "Voix poster: a frowning person beneath a pink and cyan tangle of scribbled thoughts, over a dark wall of jumbled words. Labels read detect, filter and view your thoughts, introducing the thought tracker.", caption: "Voix \u00b7 Poster", width: 1374, height: 2056 },
  { src: "/images/illustrations/voix-tote.webp", alt: "Natural canvas tote bag with black handles, printed with the voix wordmark.", caption: "Voix \u00b7 Tote bag", width: 3000, height: 2250 },
  { src: "/images/illustrations/melancholy-wall.webp", alt: "Melancholy of the Mundane wall installation: pastel push pins across a dark grid, beside the prompt pick a color and share your rendition.", caption: "Melancholy \u00b7 Wall installation", width: 1920, height: 1080 },
  { src: "/images/illustrations/melancholy-phone-logo-poster.webp", video: "/images/illustrations/melancholy-phone-logo.mp4", alt: "The Melancholy of the Mundane logo, a pink and cream brush script, animating on a phone screen.", caption: "Melancholy \u00b7 Logo on phone", width: 1190, height: 1684 },
];

const rightColumn: Piece[] = [
  { src: "/images/illustrations/voix-poster-2.webp", alt: "Voix poster: a worried person beneath a purple and cyan tangle of scribbled thoughts, over a dark wall of jumbled words, with a yellow banner introducing the thought tracker.", caption: "Voix \u00b7 Poster", width: 1375, height: 2056 },
  { src: "/images/illustrations/voix-notebook.webp", alt: "Black spiral-bound notebook with the voix wordmark debossed near the bottom.", caption: "Voix \u00b7 Notebook", width: 4000, height: 3000 },
  { src: "/images/illustrations/melancholy-poster.webp", alt: "Melancholy of the Mundane poster: a silhouetted figure walking past a wall of colourful murals at night, inviting you to witness a novel rendition through an evocative lens, 5 to 25 December.", caption: "Melancholy \u00b7 Poster", width: 863, height: 1290 },
  { src: "/images/illustrations/melancholy-logo-poster.webp", video: "/images/illustrations/melancholy-logo.mp4", alt: "The Melancholy of the Mundane logo, a pink and cream brush script, animating on a dark background.", caption: "Melancholy \u00b7 Animated logo", width: 794, height: 480 },
];

export default function PlayPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <DottedBackground />
      <header className="mb-16">
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0}>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-5">
            Flexing the graphic design muscle
          </h1>
        </AnimateIn>
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0}>
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

import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About — Bhagyashree Phadnis",
  description:
    "About Bhagyashree Phadnis — an engineer turned product designer based in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-12">
          A glimpse into my world
        </h1>
      </AnimateIn>

      {/* About Me Video */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="mb-12 sm:mb-16">
          <video
            src="/images/about/about-me.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>
      </AnimateIn>

      <div className="space-y-6 text-base text-[#6b6b6b] leading-[1.85] max-w-4xl">
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            I&rsquo;m Bhagyashree, a Product Designer based in Mumbai.
          </p>
        </AnimateIn>
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            I was raised in a household that appreciates art. Be it music, cinema,
            or the written word. And I held onto every ounce that I could. Not a
            day goes by without me losing myself in a song, movie, or book.
            Nothing inspires me as much as art, no matter the medium.
          </p>
        </AnimateIn>
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            I am a very observant individual, sensitive to my surroundings;
            especially to the company around me. People always fascinate me. I
            take great pride in the fact that I can appreciate the diversity of
            people around me. I imbibe profound motivation from the people around
            me.
          </p>
        </AnimateIn>
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            I am deeply passionate about design, technology, and innovation. In
            today&rsquo;s times, the possibilities are truly endless. There&rsquo;s
            a unique satisfaction in creating something that nobody&rsquo;s ever
            seen. And that feeling is something that I&rsquo;m constantly chasing.
          </p>
        </AnimateIn>
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            Fuelled by art, ignited by the people around me, and driven by
            technology, Product Design &amp; Vibe Engineering allows me to unite
            my inspiration, motivation, and passion. I wish to leverage this
            power to enhance the lives of those around me.
          </p>
        </AnimateIn>
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <p>
            In my leisure, I take time to get inspired. I am a Potterhead, a
            coffee aficionado, and a travel enthusiast. You may often find me
            capturing memories of beautiful sights and experiences around me.
          </p>
        </AnimateIn>
      </div>
    </div>
  );
}

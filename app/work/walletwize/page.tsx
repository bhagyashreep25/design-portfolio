import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "WalletWize — Bhagyashree Phadnis",
  description:
    "Simplifying personal finances for young adults.",
};

const summaryItems = [
  {
    label: "The Team",
    value: [
      "1 Product Manager",
      "1 Product Designer",
      "3 Engineers",
    ],
  },
  {
    label: "My Role",
    value: [
      "Sole Product Designer:",
      "Collaboration, Research, Strategy and Decision Making, Interaction Design, IA, Wireframing, Prototyping",
    ],
  },
  { label: "Timeline", value: "3 months" },
  {
    label: "Outcome",
    value: [
      "5k downloads in 1st month",
      "1k daily active users",
      "+20% page views per session",
      "5% user retention rate",
    ],
  },
];

const goals = [
  {
    image: "/images/walletwize/goal-1.png",
    alt: "Illustration of a flag on a mountain representing financial goals",
    text: "Help young adults manage finances & achieve financial goals",
  },
  {
    image: "/images/walletwize/goal-2.png",
    alt: "Illustration of a browser window representing intuitive UX",
    text: "Design an effective, intuitive, and simple UX",
  },
  {
    image: "/images/walletwize/goal-3.png",
    alt: "Illustration of a shopping bag representing brand identity",
    text: "Create a cohesive brand, product & visual identity",
  },
];

export default function WalletWizePage() {
  return (
    <article>
      {/* Header */}
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
        <header className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#4c4c4c] mb-5">
            Simplifying personal finances for young adults
          </h1>
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            WalletWize
          </p>
        </header>
      </AnimateIn>

      {/* Hero Image */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-10 sm:mb-16">
          <Image
            src="/images/walletwize/hero-image.svg"
            alt="WalletWize app hero visual"
            width={1200}
            height={675}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </AnimateIn>

      {/* Summary Table */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-12 sm:mb-20">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-12 py-8">
            {summaryItems.map((item) => (
              <div key={item.label}>
                <dt className="text-[16px] font-semibold text-[#6b6b6b] uppercase mb-2">
                  {item.label}
                </dt>
                {Array.isArray(item.value) ? (
                  <dd className="text-[18px] text-[#4c4c4c]">
                    <ul className="space-y-1">
                      {item.value.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </dd>
                ) : (
                  <dd className="text-[18px] text-[#4c4c4c]">{item.value}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </AnimateIn>

      {/* Case Study Sections */}
      <div className="max-w-5xl mx-auto px-6">
        {/* The Problem */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Lack of personal finance management tailored for young adults
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              Young adults are a particular audience with different financial needs
              than average adults. These needs are often overlooked or they go
              unnoticed when you consider other such budgeting apps. At WalletWize,
              we want to bring their needs to the forefront and create an
              experience specifically for young adults.
            </p>
          </section>
        </AnimateIn>

        {/* Why Is It Important */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Why Is It Important To Solve This Problem?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-10">
              A unique business opportunity &amp; gap in the FinTech market
            </h2>

            {/* Highlighted quote */}
            <blockquote className="text-center px-6 sm:px-16 mb-10">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug">
                Over the last year, nearly{" "}
                <strong className="font-bold text-[#C9259A]">
                  37% of Gen Z
                </strong>{" "}
                say they&rsquo;ve experienced a{" "}
                <strong className="font-bold text-[#C9259A]">
                  financial setback
                </strong>{" "}
                &ndash; such as decreased savings or additional debt
              </p>
            </blockquote>

            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              Based on a survey by{" "}
              <a
                href="https://newsroom.bankofamerica.com/content/newsroom/press-releases/2023/10/gen-z-is-tightening-its-belt--with-73--modifying-lifestyles-due-.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#4c4c4c] hover:text-[#C9259A] transition-colors"
              >
                Bank of America
              </a>
              , Gen Z is struggling with their finances due to inflation. This
              indicates that Gen Z could use some help with managing their finances
              - a gap in the market. Further, taking a look at the competitors, it
              became clear that while Mint and others are successful, they are not
              tailored to young adults&rsquo; needs. Hence, a viable business
              opportunity presented itself.
            </p>
          </section>
        </AnimateIn>

        {/* The Goals */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              The Goals
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-12">
              A simple, delightful UX that helps young adults manage their
              finances &amp; encourages them to achieve their goals
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {goals.map((goal) => (
                <div key={goal.text} className="flex flex-col items-start">
                  <div className="w-full flex justify-center mb-6">
                    <Image
                      src={goal.image}
                      alt={goal.alt}
                      width={280}
                      height={280}
                      className="h-48 w-auto object-contain"
                    />
                  </div>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    &gt; {goal.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Competitive Analysis */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              How Do We Stand Out?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Competitive Analysis &amp; Strategy
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              Given the highly saturated market of finance management apps, it is
              crucial that WalletWize stands out and addresses the biggest problems
              plaguing these apps. For that reason, I decided to do a competitive
              analysis to see what they get right- and wrong. Here are some of my
              findings after analyzing Mint (before it was discontinued), Buddy
              &amp; NerdWallet:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Simple & logical IA",
                "Attractive visuals",
                "Do more with less",
                "Intuitive user flows",
              ].map((takeaway) => (
                <div
                  key={takeaway}
                  className="bg-[#FFEDFB] rounded-lg px-5 py-4"
                >
                  <p className="text-base text-[#6b6b6b]">
                    &gt; {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Featured Screens */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="mb-12 sm:mb-20">
          <div className="max-w-5xl mx-auto px-6 mb-8 sm:mb-12">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Making The Magic Happen
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight">
              Meet WalletWize
            </h2>
          </div>

          <div className="px-4 sm:px-8 space-y-4">
            {/* Row 1: two images side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/images/walletwize/featured-image-1.svg"
                alt="WalletWize featured screen 1"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/walletwize/featured-image-2.svg"
                alt="WalletWize featured screen 2"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Row 2: full width */}
            <Image
              src="/images/walletwize/featured-image-3.svg"
              alt="WalletWize featured screen 3"
              width={2400}
              height={800}
              className="w-full h-auto rounded-xl"
            />

            {/* Row 3: full width */}
            <Image
              src="/images/walletwize/featured-image-4.svg"
              alt="WalletWize featured screen 4"
              width={2400}
              height={800}
              className="w-full h-auto rounded-xl"
            />

            {/* Row 4: two images side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/images/walletwize/featured-image-5.webp"
                alt="WalletWize featured screen 5"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/walletwize/featured-image-6.webp"
                alt="WalletWize featured screen 6"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* View Prototype Button */}
          <div className="max-w-5xl mx-auto px-6 mt-12 flex justify-center">
            <a
              href="https://www.figma.com/proto/ecx3OZf0K9uC3UBUb9fHLc/WalletWize?page-id=0%3A1&type=design&node-id=1-836&viewport=1498%2C4702%2C0.22&t=z5c3G5RvypJub24p-1&scaling=scale-down&mode=design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] p-[13px] hover:bg-[#c4a6f5] transition-colors"
            >
              View Prototype
            </a>
          </div>
        </section>
      </AnimateIn>

      {/* Predicted Outcomes */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="mb-12 mt-12 sm:mb-20 sm:mt-20">
          <div className="max-w-5xl mx-auto px-6 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Predicted Outcomes
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              The app is about to launch very soon, the development team is
              conducting final rounds of testing. The team has put together these
              numbers as a benchmark:
            </p>
          </div>

          <div className="bg-[#FFEDFB] py-16">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                {[
                  { label: "# of downloads in 1st month", value: "5k" },
                  { label: "Estimated daily active users", value: "1k" },
                  { label: "Page views per session", value: "+20%" },
                  { label: "Conversion Rate", value: "5%" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <p className="text-base text-[#333333] mb-4">
                      {metric.label}
                    </p>
                    <p className="font-serif text-6xl sm:text-7xl font-bold text-[#C9259A]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Browse Other Projects */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#4c4c4c] mb-10">
            Browse Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Link href="/work/clover-ai" className="group block">
              <div className="relative">
                {/* Text positioned above the card */}
                <div className="relative z-10 px-8" style={{ marginBottom: -25 }}>
                  <p className="font-serif text-[28px] font-light text-[#4c4c4c] leading-[1.3]">
                    I designed an{" "}
                    <strong className="font-semibold text-[#079737]">
                      AI-powered
                    </strong>{" "}
                    app to enhance{" "}
                    <strong className="font-semibold text-[#079737]">
                      health literacy
                    </strong>{" "}
                    for all
                  </p>
                </div>

                {/* Background card */}
                <div
                  className="rounded-[1.25rem] pt-[80px] px-8"
                  style={{ backgroundColor: "#EDFFF0" }}
                >
                  {/* Image breaking out at bottom */}
                  <div style={{ marginBottom: -100 }}>
                    <Image
                      src="/images/health-literacy.webp"
                      alt="Health literacy project mockup"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </AnimateIn>
    </article>
  );
}

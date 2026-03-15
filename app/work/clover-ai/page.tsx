import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Clover.ai — Bhagyashree Phadnis",
  description:
    "Enhancing health literacy through AI.",
};

const summaryItems = [
  {
    label: "The Team",
    value: [
      "2 UX Designers",
      "UX Researchers",
    ],
  },
  {
    label: "My Role",
    value: [
      "UX Designer + UX Researcher:",
      "User Interviews, Prototyping, Research, Interaction Design",
    ],
  },
  { label: "Timeline", value: "2 days" },
  {
    label: "Outcome",
    value: "Research-backed prototype ready to inform AI-based health literacy projects",
  },
];

export default function HealthLiteracyPage() {
  return (
    <article>
      {/* Header */}
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
        <header className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#4c4c4c] mb-5">
            Enhancing health literacy through AI
          </h1>
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            Clover.ai
          </p>
        </header>
      </AnimateIn>

      {/* Hero Image */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-10 sm:mb-16">
          <Image
            src="/images/clover/hero-image.svg"
            alt="Clover.ai app hero visual"
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
              How might we use AI to support people with limited health literacy
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              The problem was how can we use artificial intelligence to support
              people with limited health literacy to better manage their health? I
              was trying to enhance the health literacy of individuals with low
              health literacy and how they access their health information using
              artificial intelligence.
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
              Health Literacy is not as common as you&rsquo;d think
            </h2>

            {/* Highlighted quote */}
            <blockquote className="text-center px-6 sm:px-16 mb-10">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug">
                Nearly{" "}
                <strong className="font-bold text-[#079737]">
                  9 out of 10 adults
                </strong>{" "}
                struggle to understand and use personal and public health
                information when it&rsquo;s filled with{" "}
                <strong className="font-bold text-[#079737]">
                  unfamiliar or complex terms
                </strong>
              </p>
            </blockquote>

            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              According to a{" "}
              <a
                href="https://www.cdc.gov/healthliteracy/shareinteract/TellOthers.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#4c4c4c] hover:text-[#079737] transition-colors"
              >
                CDC article
              </a>
              , I discovered the complicated nature of health literacy. I also
              found out other basic information about health literacy and trust in
              health care providers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Health Literacy is the degree to which individuals have the ability to find information to inform health-related decisions & actions",
                "Critical appraisal is the process of carefully and systematically assessing information to judge its trustworthiness, value, and relevance in a particular context.",
                "Health literacy of patients can be increased by helping develop critical appraisal skills, simplifying patient-directed materials, teaching clinicians to use plain language.",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#E9FDEC] rounded-lg px-5 py-4"
                >
                  <p className="text-base text-[#6b6b6b]">
                    &gt; {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Solution */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Solution
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-4">
              A health-assistant bot that answers queries, analyzes documents
              &amp; manages prescriptions
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-12">
              Clover.ai addresses all of the user needs:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-14">
              {[
                {
                  image: "/images/clover/solution-1.png",
                  alt: "Illustration of a chat bubble with a question mark",
                  text: "Answer user queries (text or voice based) & perform basic medical information look up",
                },
                {
                  image: "/images/clover/solution-2.png",
                  alt: "Illustration of a medical document",
                  text: "Store medical documents /insurance files securely & answers questions about its content",
                },
                {
                  image: "/images/clover/solution-3.png",
                  alt: "Illustration of a calendar",
                  text: "Upload prescriptions, get reminders & access a calendar view of upcoming medications",
                },
                {
                  image: "/images/clover/solution-4.png",
                  alt: "Illustration of a warning triangle",
                  text: "Send distress messages to emergency contacts",
                },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-start">
                  <div className="w-full flex justify-center mb-6">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="h-36 w-auto object-contain"
                    />
                  </div>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    &gt; {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Designing the Solution */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="mb-12 sm:mb-20">
          <div className="max-w-5xl mx-auto px-6 mb-8 sm:mb-12">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Designing The Solution
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight">
              Meet Clover.ai
            </h2>
          </div>

          <div className="px-4 sm:px-8 space-y-4">
            {/* Row 1: 1 & 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/images/clover/featured-image-1.svg"
                alt="Clover.ai featured screen 1"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/clover/featured-image-2.svg"
                alt="Clover.ai featured screen 2"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Row 2: 3 & 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/images/clover/featured-image-3.svg"
                alt="Clover.ai featured screen 3"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/clover/featured-image-4.svg"
                alt="Clover.ai featured screen 4"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Row 3: 5 & 6 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/images/clover/featured-image-5.svg"
                alt="Clover.ai featured screen 5"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/clover/featured-image-6.svg"
                alt="Clover.ai featured screen 6"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Row 4: 7 full width */}
            <Image
              src="/images/clover/featured-image-7.svg"
              alt="Clover.ai featured screen 7"
              width={2400}
              height={800}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* View Prototype Button */}
          <div className="max-w-5xl mx-auto px-6 mt-12 flex justify-center">
            <a
              href="https://www.figma.com/proto/xUKom3vVzThq6SjY9GhHe7/Makeathon-2023?page-id=4%3A5&node-id=55-2040&viewport=512%2C465%2C0.24&scaling=scale-down&starting-point-node-id=55%3A2040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] p-[13px] hover:bg-[#c4a6f5] transition-colors"
            >
              View Prototype
            </a>
          </div>
        </section>
      </AnimateIn>

      {/* Outcome */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="mb-12 mt-12 sm:mb-20 sm:mt-20">
          <div className="max-w-5xl mx-auto px-6 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Outcome
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-4">
              CommunicateHealth can choose to invest in this prototype, expand it
              further and create an AI-based chatbot to enhance health literacy.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              CommunicateHealth has a research-backed prototype ready to inform
              their other AI-based projects involving health literacy.
            </p>
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
            <Link href="/work/walletwize" className="group block">
              <div className="relative">
                {/* Text positioned above the card */}
                <div className="relative z-10 px-8" style={{ marginBottom: -70 }}>
                  <p className="font-serif text-[28px] font-light text-[#4c4c4c] leading-[1.3]">
                    I created a{" "}
                    <strong className="font-semibold text-[#C9259A]">
                      finance management
                    </strong>{" "}
                    app to simplify money for{" "}
                    <strong className="font-semibold text-[#C9259A]">
                      young adults
                    </strong>
                  </p>
                </div>

                {/* Background card */}
                <div
                  className="rounded-[1.25rem] pt-[80px] px-8"
                  style={{ backgroundColor: "#FFEDFB" }}
                >
                  {/* Image breaking out at bottom */}
                  <div style={{ marginBottom: -100 }}>
                    <Image
                      src="/images/finance-management.webp"
                      alt="WalletWize project mockup"
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

import Image from "next/image";
import { Mail, Linkedin, GitHub, Instagram } from "react-feather";
import AnimateIn from "@/components/AnimateIn";

const socialLinks = [
  {
    href: "mailto:bagsphadnis@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/bhagyashree-phadnis/",
    label: "LinkedIn (opens in new tab)",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/bhagyashreep25",
    label: "GitHub (opens in new tab)",
    icon: GitHub,
    external: true,
  },
  {
    href: "https://instagram.com/bhagyashreephadnis_",
    label: "Instagram (opens in new tab)",
    icon: Instagram,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="py-16">
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.2}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Say Hello + arrow */}
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-[26px] font-medium text-[#4c4c4c]">
            Say Hello
          </h2>
          {/* Hand-drawn arrow */}
          <svg
            width="120"
            height="20"
            viewBox="0 0 120 20"
            fill="none"
            className="text-[#c0c0c0]"
          >
            <path
              d="M2 12 C25 10, 55 8, 85 9 C95 9.5, 102 10, 108 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M104 6 L110 11 L104 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Social icons */}
        <ul className="flex items-center gap-8" role="list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[#8f8f8f] hover:text-[#4c4c4c] transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={28} strokeWidth={1.5} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-12 flex justify-center">
        <p className="text-sm text-[#4c4c4c] flex items-center gap-1.5">
          Built using{" "}
          <Image
            src="/images/claude-logo.svg"
            alt="Claude logo"
            width={16}
            height={16}
            className="inline-block"
          />
          Claude Code
        </p>
      </div>
      </AnimateIn>
    </footer>
  );
}

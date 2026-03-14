import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import type { CaseStudyImage } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Bhagyashree Phadnis`,
    description: project.description,
  };
}

function ImagePlaceholder({
  color,
  alt,
  aspectRatio,
}: CaseStudyImage) {
  const ratioClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
        ? "aspect-square"
        : "aspect-[3/4]";

  return (
    <div
      className={`w-full ${ratioClass} rounded-xl`}
      style={{ backgroundColor: color }}
      role="img"
      aria-label={alt}
    />
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const otherProjects = projects.filter((_, i) => i !== currentIndex);

  return (
    <article>
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-3">
          {project.title}
        </h1>
        <p className="text-xl text-[#8f8f8f] max-w-2xl leading-relaxed">
          {project.subtitle}
        </p>
      </header>

      {/* Project metadata */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-neutral-100">
          <div>
            <dt className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-1.5">
              Role
            </dt>
            <dd className="text-sm text-[#4c4c4c]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-1.5">
              Team
            </dt>
            <dd className="text-sm text-[#4c4c4c]">{project.team}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-1.5">
              Timeline
            </dt>
            <dd className="text-sm text-[#4c4c4c]">{project.timeline}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-1.5">
              Process Overview
            </dt>
            <dd className="text-sm text-[#4c4c4c]">
              {project.processOverview}
            </dd>
          </div>
        </dl>
      </div>

      {/* Problem + Outcome + Solution summary */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-3">
              Problem
            </h2>
            <p className="text-base text-[#4c4c4c] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-3">
              Solution
            </h2>
            <p className="text-base text-[#4c4c4c] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-neutral-100">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-3xl text-[#4c4c4c] mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-[#8f8f8f]">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hero cover */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div
          className="w-full aspect-video rounded-xl"
          style={{ backgroundColor: project.coverColor }}
          role="img"
          aria-label={`${project.title} cover visual`}
        />
      </div>

      {/* Content sections */}
      <div className="max-w-3xl mx-auto px-6">
        {project.sections.map((section) => {
          if (section.type === "overview") {
            return (
              <section key={section.id} className="mb-20" aria-label="Project overview">
                <p className="text-lg text-[#6b6b6b] leading-[1.8]">
                  {section.content}
                </p>
              </section>
            );
          }

          if (section.type === "text") {
            return (
              <section key={section.id} className="mb-16">
                <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
                  {section.title}
                </h2>
                <p className="text-base text-[#6b6b6b] leading-[1.8]">
                  {section.content}
                </p>
              </section>
            );
          }

          if (section.type === "image") {
            return (
              <section key={section.id} className="mb-20">
                {section.title && (
                  <h2 className="text-base font-medium text-[#4c4c4c] mb-6">
                    {section.title}
                  </h2>
                )}
                <ImagePlaceholder
                  color={section.image.color}
                  alt={section.image.alt}
                  aspectRatio={section.image.aspectRatio}
                />
              </section>
            );
          }

          if (section.type === "images") {
            const colClass =
              section.images.length === 2 ? "grid-cols-2" : "grid-cols-3";
            return (
              <section key={section.id} className="mb-20">
                {section.title && (
                  <h2 className="text-base font-medium text-[#4c4c4c] mb-6">
                    {section.title}
                  </h2>
                )}
                <div className={`grid ${colClass} gap-4`}>
                  {section.images.map((img, i) => (
                    <ImagePlaceholder
                      key={i}
                      color={img.color}
                      alt={img.alt}
                      aspectRatio={img.aspectRatio}
                    />
                  ))}
                </div>
              </section>
            );
          }

          if (section.type === "quote") {
            return (
              <section key={section.id} className="mb-16">
                <blockquote className="border-l-2 border-[#c0c0c0] pl-6 py-2">
                  <p className="text-lg text-[#4c4c4c] italic leading-[1.8]">
                    {section.content}
                  </p>
                </blockquote>
              </section>
            );
          }

          if (section.type === "metrics") {
            return (
              <section key={section.id} className="mb-16">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {section.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-serif text-3xl text-[#4c4c4c] mb-1">
                        {metric.value}
                      </p>
                      <p className="text-sm text-[#8f8f8f]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (section.type === "reflection") {
            return (
              <section key={section.id} className="mb-16">
                <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
                  Reflection
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-base text-[#6b6b6b] leading-[1.8]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          return null;
        })}

        {/* Outcome */}
        <section className="mb-16">
          <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
            Outcome
          </h2>
          <p className="text-base text-[#4c4c4c] leading-[1.8]">
            {project.outcome}
          </p>
        </section>

        {/* Reflection */}
        {project.reflection.length > 0 && (
          <section className="mb-24">
            <h2 className="text-xs tracking-widest text-[#8f8f8f] uppercase mb-4">
              Reflection &amp; Future Scope
            </h2>
            <ul className="space-y-4">
              {project.reflection.map((item, i) => (
                <li
                  key={i}
                  className="text-base text-[#6b6b6b] leading-[1.8] pl-4 border-l-2 border-neutral-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Browse Other Projects */}
      <div className="border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#4c4c4c] mb-10">
            Browse Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="group block"
              >
                <div
                  className="w-full aspect-video rounded-xl mb-4"
                  style={{ backgroundColor: other.coverColor }}
                  role="img"
                  aria-label={`${other.title} preview`}
                />
                <h3 className="text-lg font-medium text-[#4c4c4c] mb-1 group-hover:text-[#8f8f8f] transition-colors duration-150">
                  {other.title}
                </h3>
                <p className="text-sm text-[#8f8f8f]">
                  {other.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

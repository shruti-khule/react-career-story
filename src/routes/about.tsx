import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { GraduationCap, Languages } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Shruti Khule" },
      {
        name: "description",
        content:
          "About Shruti Khule — Computer Science M.Sc. from University of Paderborn, building AI and full-stack systems.",
      },
      { property: "og:title", content: "About — Shruti Khule" },
      {
        property: "og:description",
        content: "Background, education and languages.",
      },
    ],
  }),
});

const skillGroups = [
  {
    label: "Backend",
    items: ["Django", "FastAPI", "Node.js", "PostgreSQL", "REST APIs"],
  },
  { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  {
    label: "AI / ML",
    items: [
      "LLM pipelines",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph multi-agent",
      "OpenCV",
      "PyMuPDF",
      "Docling OCR",
    ],
  },
  {
    label: "Tools",
    items: ["Pandas", "Git", "Docker", "Firebase", "Microsoft Azure"],
  },
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Hi, I’m Shruti."
        description={
          <div className="mobile-tight space-y-3 sm:space-y-4 [&_p]:text-[13px] sm:[&_p]:text-base">
            <p>
              I’m a Computer Science graduate (M.Sc., University of Paderborn) focused on
              production-grade AI systems and full-stack web development.
            </p>
            <p>
            I’m comfortable owning backend architecture, API design, and frontend delivery
            end-to-end.
            </p>
            <p>
            I enjoy working on AI systems where LLMs are embedded into real backend workflows, not just prototypes.
            </p>
            <p className="mobile-hide">
            Currently, I’m focused on improving my system design skills and exploring multi-agent architectures for production use cases. Also learning German - slowly but consistently :)
            </p>
          </div>
        }
      >
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/60 p-5 shadow-card sm:p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <GraduationCap size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Education</span>
            </div>
            <ul className="space-y-3 text-sm sm:space-y-4">
              <li>
                <p className="font-semibold text-foreground">University of Paderborn</p>
                <p className="text-muted-foreground">M.Sc. in Computer Science · 10/2022 – 03/2026</p>
                <p className="text-muted-foreground">Specialization - Intelligence and data</p>
              </li>
              <li>
                <p className="font-semibold text-foreground">
                  Bharati Vidyapeeth College of Engineering
                </p>
                <p className="text-muted-foreground">
                  B.E. in Computer Science · 08/2018 – 08/2022 · GPA 1.7
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-5 shadow-card sm:p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Languages size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Languages</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">English</span> - C1
              </li>
              <li>
                <span className="text-foreground">German</span> - B1
              </li>
              <li>
                <span className="text-foreground">Hindi</span> - C2
              </li>
              <li>
                <span className="text-foreground">Marathi</span> - C2
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="-mt-8 sm:mt-0">
        <Section eyebrow="Toolbox" title="Skills & Technologies">
        <div className="grid gap-2.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="rounded-xl border border-border bg-card/60 p-4 shadow-card mobile-text-sm sm:p-6"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] text-foreground sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      </div>
    </>
  );
}

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
        description="A Computer Science graduate (M.Sc., University of Paderborn) specializing in production-grade AI systems and full-stack web development. I’ve spent the last two years at Fraunhofer IEM building LLM pipelines, multi-agent orchestration systems, and document-intensive AI workflows. I’m comfortable owning backend architecture, API design, and frontend delivery end-to-end."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-card">
            <div className="mb-3 inline-flex items-center gap-2 text-primary">
              <GraduationCap size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Education</span>
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold text-foreground">University of Paderborn</p>
                <p className="text-muted-foreground">M.Sc. in Computer Science · 10/2022 – 03/2026</p>
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

          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-card">
            <div className="mb-3 inline-flex items-center gap-2 text-primary">
              <Languages size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Languages</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">English</span> — C1
              </li>
              <li>
                <span className="text-foreground">German</span> — B1
              </li>
              <li>
                <span className="text-foreground">Hindi</span> — C2
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Toolbox" title="Skills & Technologies">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="rounded-xl border border-border bg-card/60 p-6 shadow-card"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

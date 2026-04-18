import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Shruti Khule" },
      {
        name: "description",
        content:
          "Professional experience at Fraunhofer IEM and German Sport University — AI systems, full-stack web platforms.",
      },
      { property: "og:title", content: "Experience — Shruti Khule" },
      {
        property: "og:description",
        content: "Roles, achievements, and the systems I’ve built.",
      },
    ],
  }),
});

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Student Assistant",
    company: "Fraunhofer IEM",
    location: "Paderborn, Germany",
    period: "05/2024 – 12/2025",
    bullets: [
      "Built an intuitive Next.js dashboard backed by a FastAPI microservice for lawyers to review and process documents in real time.",
      "Developed a multi-stage ingestion pipeline (PyMuPDF + Docling OCR + GPT LLM chains) that classifies documents, extracts key entities and enriches metadata at scale.",
      "Built an AI assistant with a LangGraph multi-agent structure (Research, Form Filling, Conversational Q&A) with intelligent routing — internal assessments pointed to ~60% time savings vs. manual review.",
      "Implemented GenAI to assess ASPICE documents in the automotive domain; designed Django backend modules (auth, sessions, document storage), REST APIs, and PostgreSQL integrations.",
      "Built an LLM-powered chatbot with basic RAG and React UI components for document management, dashboards and real-time progress.",
    ],
  },
  {
    title: "Scientific Assistant (Minijob)",
    company: "German Sport University",
    location: "Köln, Germany",
    period: "06/2025 – 03/2026",
    bullets: [
      "Developed a React-based research platform with interactive 3D / AR product visualization workflows, collaborating with a PhD researcher to translate requirements into production features.",
      "Implemented interaction tracking and usage analytics to measure user behavior and feature engagement.",
      "Deployed the platform and integrated an R Shiny analytical dashboard so researchers can explore meta-analysis results in a unified interface.",
    ],
  },
];

function ExperiencePage() {
  return (
    <Section
      eyebrow="Career"
      title="Experience"
      description="Roles where I’ve shipped AI systems and full-stack products."
    >
      <ol className="relative space-y-8 border-l border-border/60 pl-6">
        {roles.map((r) => (
          <li key={r.company + r.period} className="relative">
            <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
              <Briefcase size={12} />
            </span>
            <div className="rounded-xl border border-border bg-card/60 p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">
                {r.company} · <span className="text-muted-foreground">{r.location}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

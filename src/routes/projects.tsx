import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { FileText, Bot, Cpu, Microscope } from "lucide-react";
import type { ComponentType } from "react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Shruti Khule" },
      {
        name: "description",
        content:
          "Selected projects: AI document management, multi-agent legal assistant, GenAI for systems engineering, and the Master’s thesis.",
      },
      { property: "og:title", content: "Projects — Shruti Khule" },
      {
        property: "og:description",
        content: "Selected AI & full-stack projects.",
      },
    ],
  }),
});

type Project = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  context: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    icon: FileText,
    title: "AI-Augmented Document Management",
    context: "Fraunhofer IEM",
    description:
      "Next.js dashboard + FastAPI microservice for lawyers. Multi-stage ingestion pipeline (PyMuPDF + Docling OCR + GPT chains) classifies documents and enriches metadata at scale.",
    stack: ["Next.js", "FastAPI", "PyMuPDF", "Docling", "OpenAI"],
  },
  {
    icon: Bot,
    title: "LangGraph Multi-Agent Legal Assistant",
    context: "Fraunhofer IEM",
    description:
      "Research, Form-Filling and Conversational Q&A agents with intelligent routing for complex legal queries. Internal review pointed to ~60% time savings.",
    stack: ["LangGraph", "LangChain", "Python", "RAG"],
  },
  {
    icon: Cpu,
    title: "GenAI for Systems Engineering (ASPICE)",
    context: "Fraunhofer IEM",
    description:
      "Django backend (auth, sessions, document storage), REST APIs and PostgreSQL. LLM chatbot with basic RAG plus React UI for documents, dashboards and real-time progress.",
    stack: ["Django", "PostgreSQL", "React", "RAG"],
  },
  {
    icon: Microscope,
    title: "Master’s Thesis — AI for Architecture Validation",
    context: "Fraunhofer IEM · Grade 1.7",
    description:
      "End-to-end AI pipeline turning free-text automotive scenarios into structured hazard & threat visualizations. Used Stable Diffusion, ComfyUI and Midjourney with reusable prompt-engineering workflows. Shipped as a full-stack web app on Fraunhofer IEM infrastructure.",
    stack: ["Stable Diffusion", "ComfyUI", "Python", "Full-stack"],
  },
];

function ProjectsPage() {
  return (
    <Section
      eyebrow="Selected work"
      title="Projects"
      description="A few things I’ve designed, built and shipped."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="group flex flex-col rounded-xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                {p.context}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

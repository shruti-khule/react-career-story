import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shruti Khule — AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Computer Science M.Sc. specializing in production-grade AI systems, LLM pipelines, and full-stack web development.",
      },
      { property: "og:title", content: "Shruti Khule — AI & Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Building LLM pipelines, multi-agent systems and modern web apps.",
      },
    ],
  }),
});

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "FastAPI",
  "Django",
  "LangGraph",
  "RAG",
  "PostgreSQL",
  "Docker",
];

const highlights = [
  {
    title: "AI Document Systems",
    body: "Multi-stage ingestion pipelines (PyMuPDF + Docling OCR + LLM chains) that classify, extract and enrich legal documents at scale.",
  },
  {
    title: "Multi-Agent Orchestration",
    body: "LangGraph agents (Research, Form Filling, Conversational Q&A) with intelligent routing for complex queries.",
  },
  {
    title: "Full-Stack Delivery",
    body: "Owning architecture end-to-end — Django/FastAPI backends, PostgreSQL, and Next.js / React frontends.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-card">
            <Sparkles size={12} className="text-primary" />
            Available for AI / Full-Stack roles
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Building <span className="text-gradient">production-grade AI</span>
            <br />
            for the real world.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I’m Shruti — a Computer Science M.Sc. from the University of Paderborn. I design LLM
            pipelines, multi-agent systems and modern web apps end-to-end, currently at Fraunhofer
            IEM.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              View my work <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Mail size={16} /> Get in touch
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Paderborn, Germany
            </span>
            <span className="font-mono text-xs">EN C1 · DE B1 · HI C2</span>
          </div>

          {/* Skill chips */}
          <div className="mt-12 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section
        eyebrow="What I do"
        title="From research prototypes to shipped products"
        description="A snapshot of the kind of systems I build day-to-day."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                <Sparkles size={18} />
              </div>
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

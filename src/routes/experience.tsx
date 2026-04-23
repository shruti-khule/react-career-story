import { Section } from "@/components/Section";
import { Briefcase, Linkedin, Quote } from "lucide-react";

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  mobileHighlights?: string[];
  subProjects?: {
    name: string;
    tag?: string;
    bullets: string[];
  }[];
};

type Recommendation = {
  quote: string;
  author: string;
  position: string;
  role: string;
  linkedinUrl: string;
};

const roles: Role[] = [
  {
    title: "Student Assistant",
    company: "Fraunhofer IEM",
    location: "Paderborn, Germany",
    period: "05/2024 – 12/2025",
    mobileHighlights: [],
    bullets: [],
    subProjects: [
      {
        name: "AI-Augmented Document Management System",
        bullets: [
          "Built an intuitive Next.js dashboard backed by a FastAPI microservice for lawyers to review and process documents in real time.",
          "Developed a multi-stage ingestion pipeline (PyMuPDF + Docling OCR + GPT LLM chains) that classifies documents, extracts key entities and enriches metadata at scale.",
          "Built an AI assistant with a LangGraph multi-agent structure (Research, Form Filling, Conversational Q&A) with intelligent routing - internal assessments pointed to ~60% time savings vs. manual review.",
        ],
      },
      {
        name: "Artificial Intelligence for Systems Engineering",
        bullets: [
          "Implemented GenAI to assess ASPICE documents in the automotive domain.",
          "designed Django backend modules (auth, sessions, document storage), REST APIs, and PostgreSQL integrations.",
          "Built an LLM-powered chatbot with basic RAG and React UI components for document management, dashboards and real-time progress.",
        ],
      },
      {
        name: "AI-Augmented Solution for Scenario-Based Optimization",
        tag: "Master's Thesis",
        bullets: [
          "Grade: 1.7",
          "Implemented an end-to-end GenAI pipeline transforming free-text automotive scenarios into structured hazard and threat visualizations for architecture validation.",
          "Applied diffusion models (Stable Diffusion, ComfyUI, Midjourney) to automate visualization for safety-critical automotive systems, building reusable prompt engineering workflows to ensure semantic consistency.",
          "Built and deployed a full-stack web application on Fraunhofer IEM infrastructure, integrating the AI pipeline to enable end-to-end scenario generation and analysis for systems engineers.",
        ],
      },
    ],
  },
  {
    title: "Scientific Assistant",
    company: "Deutsche Sporthochschule Köln",
    location: "Köln, Germany",
    period: "06/2025 – 03/2026",
    mobileHighlights: [
      "Built a React based E-commerce research platform with interactive 3D/AR visualization.",
      "Implemented interaction tracking, analytics, and R Shiny dashboard to analyze user behavior and explore meta-analysis results.",
    ],
    bullets: [
      "Developed a React-based research platform with interactive 3D / AR product visualization workflows, collaborating with a PhD researcher to translate requirements into production features.",
      "Implemented interaction tracking and usage analytics to measure user behavior and feature engagement.",
      "Deployed the platform and integrated an R Shiny analytical dashboard so researchers can explore meta-analysis results in a unified interface.",
    ],
  },
];

const recommendations: Recommendation[] = [
  {
    quote:
      "Shruti Khule worked as a Student Assistant at Fraunhofer IEM, where she supported the development of AI driven software solutions within a research environment. She worked across Fullstack development as well as applied AI research. She demonstrated strong technical competence, a structured working approach, and the ability to independently address complex engineering challenges. Shruti collaborated effectively within the research environment and showed strong motivation to continuously expand her skills. I highly recommend her for roles in software engineering and applied AI development.",
    author: "Laban Asmar",
    position: "Head of Department, Innovation Engineering @ Fraunhofer IEM | Prof. Dr.  ",
    role: "Student Assistant",
    linkedinUrl: "https://www.linkedin.com/in/replace-with-exact-link/",
  },
  {
    quote:
      "Shruti Khule has been employed as a Student Assistant at the Sports University Köln since June 2025, supporting the institute’s research activities as a computer scientist. Her responsibilities included developing an e-commerce research prototype with integrated 3D and AR visualizations and building a Shiny dashboard in R to present and analyze study results. Shruti demonstrated solid technical skills, a structured approach to problem solving, and the ability to work independently while collaborating effectively within an interdisciplinary research environment. She adapted well to changing project requirements and consistently delivered reliable and well-implemented solutions.",
    author: "Kim Uhlendorf-Leo",
    position: "Research Associate | PhD Candidate in Consumer Behavior @ GSU / UoC ",
    role: "Scientific Assistant Full-stack Developer",
    linkedinUrl: "https://www.linkedin.com/in/replace-with-exact-link/",
  },
  {
    quote:
      "I worked with Shruti for more than 1 and a half years. She is excellent in Teamwork, reporting progress and can fit in teams quickly. She has great understanding to system architecture and AI Applications and can program agents which is very important coming into 2026. She worked with me programming an enterprise level system and she excels in writing clean backend code, maintainable architecture and she is familiar with Frontend frameworks too like React. She is a strong Full Stack Developer and i recommend her to any team working on Software!",
    author: "Jamil Mounzer",
    position:
      "Founder & CEO von Optimaite | Softwareingenieur & KI-Experte bei Fraunhofer | Spezialist für lokale Modelle & Dokumenteverarbeitung",
    role: "Student Assistant",
    linkedinUrl: "https://www.linkedin.com/in/replace-with-exact-link/",
  },
];

const mobileProjectHighlights: Record<string, string[]> = {
  "AI-Augmented Document Management System": [
    "Built AI document review platform (Next.js + FastAPI) for legal workflows.",
    "Created multi-agent LLM assistant automating analysis → ~60% faster reviews.",
  ],
  "Artificial Intelligence for Systems Engineering": [
    "Developed GenAI + RAG system for ASPICE automotive document assessment.",
    "Built an AI dashboard with react, Django & postgresql, for document analysis and engineering guidance.",
  ],
  "AI-Augmented Solution for Scenario-Based Optimization": [
    "Designed GenAI pipeline generating hazard & threat visualizations from text scenarios.",
    "Deployed AI web platform using diffusion models ( ComfyUI) for automated scenario analysis.",
  ],
};

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Career"
      title="Experience"
      description={
        <span className="hidden sm:inline">
          Roles where I’ve shipped AI systems and full-stack products.
        </span>
      }
    >
      <ol className="relative space-y-5 border-l-0 pl-0 sm:space-y-8 sm:border-l sm:border-border/60 sm:pl-6">
        {roles.map((r) => (
          <li key={r.company + r.period} className="relative">
            <span className="absolute -left-[34px] hidden h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow sm:flex">
              <Briefcase size={12} />
            </span>
            <div className="p-0 sm:rounded-xl sm:border sm:border-border sm:bg-card/60 sm:p-6 sm:shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold sm:text-xl">{r.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary mobile-text-sm">
                {r.company} · <span className="text-muted-foreground">{r.location}</span>
              </p>
              {r.mobileHighlights && r.mobileHighlights.length > 0 ? (
                <ul className="mt-2 ml-4 list-disc space-y-1 text-xs text-muted-foreground sm:hidden">
                  {r.mobileHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-4 hidden space-y-2 text-sm text-muted-foreground mobile-text-sm sm:block">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {r.subProjects && r.subProjects.length > 0 ? (
                <div className="mt-3 grid gap-2 sm:mt-5 sm:gap-4">
                  {r.subProjects.map((project) => (
                    <section
                      key={project.name}
                      className="border-0 bg-transparent p-0 sm:rounded-lg sm:border sm:border-border/70 sm:bg-background/60 sm:p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                          {project.name}
                        </h4>
                        {project.tag ? (
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                            ({project.tag})
                          </span>
                        ) : null}
                      </div>
                      <ul className="mt-1 ml-4 list-disc space-y-1 text-xs text-muted-foreground sm:hidden">
                        {(
                          mobileProjectHighlights[project.name] ?? [
                            "Sample point: Project details shown in compact mobile form.",
                            "Sample point: Additional mobile summary content for this project.",
                          ]
                        ).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <ul className="mt-3 hidden space-y-2 text-sm text-muted-foreground mobile-text-sm sm:block">
                        {project.bullets.map((point, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <div className="mobile-hide mt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          LinkedIn Recommendations
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {recommendations.map((item) => (
            <article
              key={item.author + item.role}
              className="group rounded-2xl border border-border/70 bg-card/70 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {item.role}
                </p>
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/50 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  aria-label={`Open ${item.author}'s LinkedIn recommendation`}
                >
                  <Linkedin size={12} />
                  View
                </a>
              </div>
              <Quote size={16} className="mb-2 text-primary/70" />
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{item.quote}"</p>
              <div className="mt-4 border-t border-border/60 pt-3">
                <p className="text-sm font-medium text-foreground">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.position}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

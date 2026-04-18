import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Github, Linkedin, Coffee, Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shruti Khule — Software Developer" },
      {
        name: "description",
        content:
          "Personal site of Shruti Khule — software developer based in Paderborn, building AI systems and full-stack web apps.",
      },
      { property: "og:title", content: "Shruti Khule — Software Developer" },
      {
        property: "og:description",
        content: "Personal site — software developer building AI systems and full-stack web apps.",
      },
    ],
  }),
});

const stack = [
  "python",
  "typescript",
  "react",
  "next.js",
  "fastapi",
  "django",
  "postgres",
  "docker",
  "langgraph",
];

function Index() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 sm:pt-28">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Currently building things at Fraunhofer IEM
        </div>

        {/* Greeting */}
        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Hey, I’m Shruti. <span className="inline-block">👋</span>
          <br />
          <span className="text-muted-foreground">I’m a </span>
          <span className="text-gradient">software developer</span>
          <span className="text-muted-foreground">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I write code for a living — mostly Python and TypeScript. I like building things that
          ship: clean APIs, thoughtful UIs, and the occasional LLM pipeline that actually works in
          production. Currently based in Paderborn, Germany.
        </p>

        {/* Terminal card */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card/70 shadow-card">
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="h-3 w-3 rounded-full bg-accent/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/shruti — zsh</span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-accent">$</span>{" "}
              <span className="text-foreground">whoami</span>
              {"\n"}
              <span className="text-muted-foreground">shruti khule — software developer</span>
              {"\n\n"}
              <span className="text-accent">$</span>{" "}
              <span className="text-foreground">cat stack.txt</span>
              {"\n"}
              <span className="text-primary">{stack.join("  ")}</span>
              {"\n\n"}
              <span className="text-accent">$</span>{" "}
              <span className="text-foreground">cat now.md</span>
              {"\n"}
              <span className="text-muted-foreground">
                building multi-agent systems & document AI pipelines.
                {"\n"}finishing my M.Sc. thesis. learning more German.
              </span>
              {"\n\n"}
              <span className="text-accent">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground" />
            </code>
          </pre>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            <Terminal size={16} /> See my projects <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail size={16} /> Say hi
          </Link>
        </div>

        {/* Meta row */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> Paderborn, Germany
          </span>
          <span className="inline-flex items-center gap-2">
            <Coffee size={14} className="text-primary" /> Powered by coffee
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shruti-khule"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shruti-khule"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

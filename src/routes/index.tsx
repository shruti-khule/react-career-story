import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Coffee, Download } from "lucide-react";

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

export default function HomePage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-10 pb-10 sm:pt-12">
        {/* Greeting */}
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Hey, I’m Shruti. <span className="inline-block"></span>
          <br />
          <span className="text-muted-foreground">I’m a </span>
          <span className="text-gradient">software developer</span>
          <span className="text-muted-foreground">.</span>
        </h1>

        <p className="mobile-tight mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground mobile-text-sm">
          I’m a full-stack developer focused on Generative AI, backend systems, and intelligent
          automation. I can design and ship reliable AI applications - from LLM pipelines and
          multi-agent systems to scalable APIs and modern web interfaces.
        </p>

        {/* Terminal card */}
        <div className="mobile-hide mt-6 overflow-hidden rounded-xl border border-border bg-card/70 shadow-card">
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="h-3 w-3 rounded-full bg-accent/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/shruti - zsh</span>
          </div>
          <pre className="overflow-x-auto px-4 py-3.5 font-mono text-xs leading-relaxed sm:text-sm">
            <code>
              <span className="text-accent">$</span> <span className="text-foreground">whoami</span>
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
                deepening system design skills.
                {"\n"}building AI agent prototypes. learning more German.
              </span>
              {"\n\n"}
              <span className="text-accent">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground" />
            </code>
          </pre>
        </div>

        {/* CTA */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle size={16} /> Say hi
          </Link>
          <a
            href="/shruti-khule-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mobile-text-sm">
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> Paderborn, Germany
          </span>
          <span className="mobile-hide inline-flex items-center gap-2">
            <Coffee size={14} className="text-primary" /> Powered by coffee
          </span>
        </div>
      </div>
    </section>
  );
}

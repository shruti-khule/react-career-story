import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 max-w-3xl">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description && (
          <div className="mt-3 text-base text-muted-foreground">
            {typeof description === "string" ? <p>{description}</p> : description}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}

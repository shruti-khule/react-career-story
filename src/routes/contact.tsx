import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Shruti Khule" },
      {
        name: "description",
        content: "Get in touch with Shruti Khule — email, phone, GitHub and LinkedIn.",
      },
      { property: "og:title", content: "Contact — Shruti Khule" },
      { property: "og:description", content: "Let’s build something together." },
    ],
  }),
});

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "shrutikhule01@gmail.com",
    href: "mailto:shrutikhule01@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+49 176 4667 9207", href: "tel:+4917646679207" },
  { icon: MapPin, label: "Location", value: "Paderborn, Germany" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shruti-khule",
    href: "https://linkedin.com/in/shruti-khule",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shruti-khule",
    href: "https://github.com/shruti-khule",
  },
];

function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let’s build something together."
      description="Open to AI / full-stack roles and collaborations. The fastest way to reach me is by email."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => {
          const Icon = it.icon;
          const inner = (
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 shadow-card transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-elegant">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon size={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {it.label}
                </p>
                <p className="text-sm text-foreground">{it.value}</p>
              </div>
            </div>
          );
          return it.href ? (
            <a key={it.label} href={it.href} className="group" target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={it.label} className="group">
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

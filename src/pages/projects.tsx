import { ArrowRight, ExternalLink, ShieldCheck, Rocket, LineChart } from "lucide-react";

import { Badge, Card, CardBody, Container, LinkButton, Section, SectionHeading } from "@/components/ui";

const projects = [
  {
    title: "47Builders",
    status: "Building",
    icon: ShieldCheck,
    description:
      "A trust-first construction platform for diaspora clients: builder verification, milestone payments, and progress transparency.",
    highlights: ["Risk checklist", "Verification workflow", "Milestone-based payments"],
    links: [
      { label: "Product site", href: "https://www.new.47builders.uk", external: true },
    ],
  },
  {
    title: "1133Academy",
    status: "Launched MVP",
    icon: Rocket,
    description:
      "An AI-powered personalized learning platform designed to help professionals upskill and advance their careers.",
    highlights: ["Personalized paths", "Engagement loops", "Course completion"],
    links: [{ label: "Learn more", href: "/contact", external: false }],
  },
  {
    title: "Aval Technologies",
    status: "MVP",
    icon: LineChart,
    description:
      "A marketplace of website integration packages. Create a project, install a package, and verify the connection.",
    highlights: ["Next.js + AWS", "Integration packages", "Connection testing"],
    links: [{ label: "Discuss build", href: "/contact", external: false }],
  },
] as const;

export function Projects() {
  return (
    <div>
      <Section>
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="What I’m building"
              description="A few ventures and products where I’ve applied product strategy, execution, and trust systems."
            />
            <LinkButton to="/contact" variant="secondary" size="sm">
              Collaborate <ArrowRight className="size-4" />
            </LinkButton>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="h-full">
                  <CardBody className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {p.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <Badge key={h}>{h}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.links.map((l) =>
                        l.external ? (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                          >
                            {l.label} <ExternalLink className="size-4" />
                          </a>
                        ) : (
                          <LinkButton key={l.label} to={l.href} variant="primary" size="sm">
                            {l.label} <ArrowRight className="size-4" />
                          </LinkButton>
                        )
                      )}
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="text-xs text-slate-500">
                        Want a similar build? I can help with product strategy, execution plan, and MVP delivery.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="How I support teams"
            description="A practical, outcome-driven approach that helps you ship faster with less risk."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Capability
              title="Product strategy"
              points={["North star metric + supporting metrics", "Prioritization and trade-offs", "Clear PRDs and scope control"]}
            />
            <Capability
              title="Execution"
              points={["MVP definition", "Delivery milestones", "Risk register + mitigations"]}
            />
            <Capability
              title="Growth"
              points={["Positioning + messaging", "Partnership strategy", "Acquisition loops and retention"]}
            />
            <Capability
              title="Trust systems"
              points={["Verification frameworks", "Milestone payments", "Transparency tools for stakeholders"]}
            />
          </div>

          <div className="mt-8">
            <LinkButton to="/contact" variant="secondary">
              Tell me what you’re building <ArrowRight className="size-4" />
            </LinkButton>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Capability({ title, points }: { title: string; points: string[] }) {
  return (
    <Card>
      <CardBody>
        <h3 className="text-base font-semibold">{title}</h3>
        <ul className="mt-3 grid gap-2 text-sm text-slate-600">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-2 size-1.5 rounded-full bg-sky-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

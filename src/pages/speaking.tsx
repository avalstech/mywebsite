import { ArrowRight, Mic, Video, FileText } from "lucide-react";

import { Badge, Card, CardBody, Container, LinkButton, Section, SectionHeading } from "@/components/ui";

const topics = [
  {
    title: "Strategy begins with what you don’t build",
    description: "How to create clarity, avoid roadmap theater, and ship outcomes that matter.",
    tags: ["Prioritization", "Decision frameworks", "Stakeholders"],
  },
  {
    title: "Trust systems for marketplaces",
    description: "Verification, milestone payments, and transparency patterns that reduce fraud and improve adoption.",
    tags: ["Marketplaces", "Risk", "Governance"],
  },
  {
    title: "Fast MVPs on AWS-native stacks",
    description: "A practical playbook for building production-grade MVPs quickly without over-engineering.",
    tags: ["MVP", "AWS", "Execution"],
  },
] as const;

export function Speaking() {
  return (
    <div>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Speaking & media"
                title="Talks that move teams from hype to execution"
                description="I speak on product strategy, venture building, and trust systems. If you need a guest speaker or panelist, I’m available."
              />

              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton to="/contact" variant="secondary">
                  Invite me to speak <ArrowRight className="size-4" />
                </LinkButton>
                <LinkButton to="/projects" variant="primary">
                  View case studies <ArrowRight className="size-4" />
                </LinkButton>
              </div>

              <div className="mt-10 grid gap-4">
                <Mini icon={Mic} title="Keynotes" text="Product clarity, execution, and growth." />
                <Mini icon={Video} title="Workshops" text="Hands-on discovery, roadmaps, and MVP planning." />
                <Mini icon={FileText} title="Media" text="Interviews, podcasts, and written thought pieces." />
              </div>
            </div>

            <div className="grid gap-4">
              {topics.map((t) => (
                <Card key={t.title}>
                  <CardBody>
                    <h3 className="text-base font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {t.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Media kit"
            title="Make it easy to feature me"
            description="Use this copy for event pages, podcasts, or introductions. Replace placeholders as needed."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardBody>
                <p className="text-sm font-semibold">Short bio</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Victor Anene is a product leader and venture builder focused on clarity, speed, and trust. He helps teams ship useful products,
                  build adoption, and reduce execution risk with practical decision frameworks.
                </p>

                <p className="mt-6 text-sm font-semibold">Long bio</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Victor Anene works across product management, venture building, and growth. He partners with teams to define clear outcomes,
                  prioritize what matters, and execute fast iterations that customers adopt. His work often centers on trust systems for marketplaces,
                  pragmatic MVP delivery, and stakeholder alignment.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <p className="text-sm font-semibold">Contact</p>
                <p className="mt-3 text-sm text-slate-600">Email: victoranene@1133incubators.com</p>
                <p className="mt-2 text-sm text-slate-600">WhatsApp: +234 (0) 8084619757</p>
                <div className="mt-6">
                  <LinkButton to="/contact" variant="secondary" className="w-full">
                    Request availability <ArrowRight className="size-4" />
                  </LinkButton>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Mini({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}

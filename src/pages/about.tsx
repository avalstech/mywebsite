import { Badge, Card, CardBody, Container, Section, SectionHeading, LinkButton } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Clear intent over busy roadmaps",
    description:
      "Roadmaps don’t create alignment. Clear intent does. If the team can’t explain why a feature matters, it’s not ready."
  },
  {
    title: "Trust is a product feature",
    description:
      "Users adopt what feels safe and predictable. I design delivery and governance to reduce uncertainty for customers and stakeholders."
  },
  {
    title: "Shipping beats debating",
    description:
      "Fast feedback loops are the real advantage. Prototype, test, measure, and iterate."
  },
] as const;

const focusAreas = [
  "Product strategy & prioritization",
  "MVP execution and iteration",
  "Marketplace trust systems",
  "Growth loops and partnerships",
  "Metrics, experimentation, and dashboards",
] as const;

export function About() {
  return (
    <div>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="About"
            title="I build systems that make execution predictable"
            description="I’m a product leader and venture builder focused on clarity, speed, and trust. I work with teams to turn uncertainty into a roadmap that can actually ship."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardBody>
                <h3 className="text-lg font-semibold">My story</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  I work across product, venture, and growth. That means I care about discovery and execution, but also about what happens after launch:
                  adoption, trust, retention, and distribution.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  I’m most useful in environments where priorities are noisy, stakeholders are many, and the team needs a calm decision framework.
                  The job is to choose what not to build, focus on outcomes, and create momentum.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Senior Product Management</Badge>
                  <Badge>Venture building</Badge>
                  <Badge>AWS-native execution</Badge>
                  <Badge>Partnerships</Badge>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton to="/projects" variant="primary">
                    View projects <ArrowRight className="size-4" />
                  </LinkButton>
                  <LinkButton to="/contact" variant="secondary">
                    Work with me <ArrowRight className="size-4" />
                  </LinkButton>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold">Focus areas</h3>
                <ul className="mt-4 grid gap-3">
                  {focusAreas.map((a) => (
                    <li key={a} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 size-5 text-sky-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="How I work"
            title="Principles that keep teams shipping"
            description="Simple rules that prevent slow-motion projects and keep the team aligned on outcomes."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title}>
                <CardBody>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-sky-600 to-slate-900 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Collaboration</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Let’s build something useful</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">
                  If you need product leadership to cut through ambiguity and ship outcomes, I’m available for consulting and fractional roles.
                </p>
              </div>
              <div className="p-8 lg:col-span-2">
                <h4 className="text-sm font-semibold">What you can expect</h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Mini title="Week 1" text="Align on outcomes, constraints, risks, and the critical path." />
                  <Mini title="Weeks 2–4" text="Discovery, prioritization, and a delivery plan your team can execute." />
                  <Mini title="Ongoing" text="Ship iterations, measure adoption, and tighten the loop." />
                  <Mini title="Always" text="Clear communication, fast feedback, and pragmatic decisions." />
                </div>
                <div className="mt-6">
                  <LinkButton to="/contact" variant="secondary">
                    Start a conversation <ArrowRight className="size-4" />
                  </LinkButton>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}

function Mini({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

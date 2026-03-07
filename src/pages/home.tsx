import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge, Button, Card, CardBody, Container, LinkButton, Section, SectionHeading } from "@/components/ui";

const highlights = [
  "Product strategy that survives contact with reality",
  "Fast execution with clear intent and measurable outcomes",
  "Stakeholder alignment without endless meetings",
  "Systems thinking across product, GTM, and ops",
];

const expertise = [
  {
    title: "Product Leadership",
    description:
      "Clarify the problem, define success metrics, align stakeholders, and ship iterations that move the needle.",
    bullets: ["Roadmaps", "PRDs", "Discovery", "A/B testing"],
  },
  {
    title: "Venture Building",
    description:
      "Turn messy ideas into MVPs, validate demand, and build defensible products with pragmatic execution.",
    bullets: ["MVP strategy", "Market research", "Pricing", "Launch"],
  },
  {
    title: "Growth & Partnerships",
    description:
      "Build distribution, partnerships, and repeatable growth loops with strong unit economics.",
    bullets: ["BD", "Partnerships", "Positioning", "GTM"],
  },
] as const;

const featuredProjects = [
  {
    title: "47Builders",
    kicker: "Diaspora construction marketplace",
    description:
      "A trusted platform that connects diaspora clients with verified builders and artisans for predictable, transparent project delivery.",
    tags: ["Verification", "Milestone payments", "Risk controls"],
    link: "/projects",
  },
  {
    title: "1133Academy",
    kicker: "AI-powered learning platform",
    description:
      "Personalized learning that helps professionals upskill faster with guided paths, feedback loops, and career-aligned outcomes.",
    tags: ["Personalization", "Retention", "Learning analytics"],
    link: "/projects",
  },
  {
    title: "Aval Technologies",
    kicker: "Website integration packages marketplace",
    description:
      "A marketplace where teams install prebuilt integration packages and verify connections quickly with minimal engineering effort.",
    tags: ["MVP", "AWS", "Developer experience"],
    link: "/projects",
  },
] as const;

export function Home() {
  return (
    <div>
      <Hero />
      <QuickIntroSection />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="What I do"
                title="Build products people actually adopt"
                description="I work at the intersection of product, venture, and growth. The goal is simple: reduce risk, ship faster, and create durable value."
              />
              <ul className="mt-6 grid gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-5 text-sky-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton to="/about" variant="ghost">
                  About me <ArrowRight className="size-4" />
                </LinkButton>
                <LinkButton to="/projects" variant="primary">
                  View projects <ArrowRight className="size-4" />
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4">
              {expertise.map((e) => (
                <Card key={e.title}>
                  <CardBody>
                    <p className="text-sm font-semibold text-slate-900">{e.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.bullets.map((b) => (
                        <Badge key={b}>{b}</Badge>
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
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Products, platforms, and ventures"
              description="A few things I’ve been building across product leadership, venture building, and platform growth."
            />
            <LinkButton to="/projects" variant="secondary" size="sm">
              See all projects <ArrowRight className="size-4" />
            </LinkButton>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <Card key={p.title} className="h-full">
                <CardBody className="flex h-full flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                    {p.kicker}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <LinkButton to={p.link} variant="ghost" size="sm">
                      Learn more <ArrowRight className="size-4" />
                    </LinkButton>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 right-[-8rem] h-72 w-[34rem] rounded-full bg-slate-200/50 blur-3xl" />
      </div>

      <Section className="pb-14 pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-sky-200 bg-sky-50 text-sky-700">
                  <Sparkles className="mr-1 size-3.5" /> Product leader
                </Badge>
                <Badge>Venture builder</Badge>
                <Badge>Growth & partnerships</Badge>
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Strategy begins the moment you decide what not to build.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                I’m Victor Udoka Anene. I help teams define clear intent, ship useful products fast, and build trust through disciplined execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton to="/contact" variant="secondary">
                  Hire me for product management <ArrowRight className="size-4" />
                </LinkButton>
                <LinkButton to="/projects" variant="primary">
                  Explore my work <ArrowRight className="size-4" />
                </LinkButton>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                <Stat label="Focus" value="Product + Venture" />
                <Stat label="Approach" value="Clarity → Shipping" />
                <Stat label="Outcome" value="Adoption + Trust" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="lg:pl-6"
            >
              <div className="mx-auto w-full max-w-lg rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/victor-hero.png"
                  alt="Victor Anene"
                  className="h-[450px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function QuickIntroSection() {
  return (
    <Section className="bg-slate-50/70">
      <Container>
        <Card className="border-slate-200/80 shadow-sm">
          <CardBody className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Quick intro</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              I build practical systems for discovery, prioritization, and delivery.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              So teams can move fast without breaking trust.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <QuickIntroItem title="Product strategy" text="Decision frameworks, priorities, and outcomes." />
              <QuickIntroItem title="Execution" text="MVPs, sprints, and measurable releases." />
              <QuickIntroItem title="Growth" text="Positioning, partnerships, and distribution loops." />
            </div>

            <div className="mt-7">
              <a
                href="#product-cta"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                Let’s build something useful <ArrowRight className="size-4" />
              </a>
            </div>
          </CardBody>
        </Card>
      </Container>
    </Section>
  );
}

function QuickIntroItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function CTA() {
  return (
    <Section id="product-cta">
      <Container>
        <Card className="overflow-hidden">
          <div className="bg-slate-900">
            <div className="relative">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute -left-20 top-[-6rem] h-60 w-60 rounded-full bg-sky-600 blur-3xl" />
                <div className="absolute right-[-6rem] bottom-[-7rem] h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
              </div>
              <div className="relative p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Product management CTA
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Need a Senior Product Manager who ships?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">
                  If you’re building a platform, marketplace, or SaaS and want faster execution with less risk, I can help.
                  Clear intent. Fewer distractions. Stronger outcomes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton to="/contact" variant="secondary">
                    Book a call <ArrowRight className="size-4" />
                  </LinkButton>
                  <LinkButton to="/projects" variant="ghost" className="text-white hover:bg-white/10">
                    View projects <ArrowRight className="size-4" />
                  </LinkButton>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <Badge className="border-white/15 bg-white/10 text-white">Discovery → Delivery</Badge>
                  <Badge className="border-white/15 bg-white/10 text-white">Roadmaps</Badge>
                  <Badge className="border-white/15 bg-white/10 text-white">Stakeholder alignment</Badge>
                  <Badge className="border-white/15 bg-white/10 text-white">Growth strategy</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

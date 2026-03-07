import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

import { Button, Card, CardBody, Container, Section, SectionHeading } from "@/components/ui";
import { profile, profileLinks } from "@/config/profile";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional().default(""),
  message: z.string().min(10, "Please add a short message (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const CONTACT_EMAIL = profile.email;
const WHATSAPP_LINK = profile.whatsappUrl;

export function Contact() {
  const [status, setStatus] = React.useState<
    { type: "idle" } | { type: "success"; text: string } | { type: "error"; text: string }
  >({ type: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    setStatus({ type: "idle" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company ?? "",
          message: values.message,
          _subject: `Website inquiry from ${values.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus({ type: "success", text: "Message sent successfully. I will reply via email shortly." });
      reset();
    } catch {
      const subject = encodeURIComponent(`Website inquiry from ${values.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          values.company ? `Company: ${values.company}` : "",
          "",
          values.message,
          "",
          "Sent from victoranene.com",
        ]
          .filter(Boolean)
          .join("\n")
      );

      const mailto = `${profileLinks.email}?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      setStatus({
        type: "error",
        text: "Couldn’t send directly. Opening your email client as fallback.",
      });
    }
  };

  return (
    <div>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Tell me what you’re building"
                description="If you need product leadership, a roadmap that can actually ship, or help designing a trust-first marketplace, send a note."
              />

              <div className="mt-8 grid gap-4">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  text={CONTACT_EMAIL}
                  href={profileLinks.email}
                />
                <ContactCard
                  icon={MessageCircle}
                  title="WhatsApp"
                  text="Chat directly"
                  href={WHATSAPP_LINK}
                  external
                />
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  text={profile.phoneDisplay}
                  href={profile.phoneHref}
                />
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Prefer WhatsApp for urgent requests, or email me directly if your device cannot open a mail client.
              </p>
            </div>

            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold">Send a message</h3>
                <p className="mt-2 text-sm text-slate-600">
                  This form sends directly to my inbox. If delivery fails, it falls back to your email client.
                </p>

                <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none ring-sky-400/20 transition focus:border-sky-300 focus:ring-4"
                      placeholder="Your name"
                      autoComplete="name"
                      {...register("name")}
                    />
                  </Field>

                  <Field label="Email" error={errors.email?.message}>
                    <input
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none ring-sky-400/20 transition focus:border-sky-300 focus:ring-4"
                      placeholder={profile.email}
                      autoComplete="email"
                      {...register("email")}
                    />
                  </Field>

                  <Field label="Company (optional)" error={errors.company?.message}>
                    <input
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none ring-sky-400/20 transition focus:border-sky-300 focus:ring-4"
                      placeholder="Company"
                      autoComplete="organization"
                      {...register("company")}
                    />
                  </Field>

                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      className="min-h-[140px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-sky-400/20 transition focus:border-sky-300 focus:ring-4"
                      placeholder="What are you building? What outcome do you want? What’s the timeline?"
                      {...register("message")}
                    />
                  </Field>

                  <Button type="submit" variant="secondary" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send"} <ArrowRight className="size-4" />
                  </Button>

                  {status.type !== "idle" ? (
                    <div
                      className={
                        status.type === "success"
                          ? "rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"
                          : "rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800"
                      }
                      role="status"
                    >
                      {status.text}
                    </div>
                  ) : null}
                </form>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: React.PropsWithChildren<{ label: string; error?: string }>) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-slate-800">{label}</label>
        {error ? <span className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
    >
      <div className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </a>
  );
}

import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  Menu,
  X,
  Github,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { Container, LinkButton } from "@/components/ui";
import { profile, profileLinks } from "@/config/profile";

const socials = {
  ...profile.socials,
  email: profileLinks.email,
  businessContactEmail: profileLinks.businessContactEmail,
  phone: profile.phoneHref,
  whatsapp: profile.whatsappUrl,
} as const;

function LogoMark() {
  // swap the textual/colored mark for a static image stored in public/logo.png
  // drop your desired logo image into the public folder and reference it here
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logos.png"
        alt={`${profile.shortName} logo`}
        className="h-12 w-12 rounded-xl object-contain"
      />
      <div className="leading-tight">
        <p className="text-sm font-bold text-slate-900">{profile.name}</p>
        <p className="text-xs text-slate-600">Product • Venture • Growth</p>
      </div>
    </div>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
] as const;

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900",
          isActive && "bg-slate-100 text-slate-900"
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function SiteLayout({ children }: React.PropsWithChildren) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" aria-label={profile.name}>
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LinkButton to="/contact" variant="secondary" size="sm">
              Let’s work together <ArrowRight className="size-4" />
            </LinkButton>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>

        {open ? (
          <div className="border-t border-slate-200/70 bg-white md:hidden">
            <Container className="py-3">
              <div className="grid gap-1">
                {nav.map((n) => (
                  <NavItem key={n.to} to={n.to} label={n.label} onClick={() => setOpen(false)} />
                ))}
              </div>
              <div className="mt-3">
                <LinkButton to="/contact" variant="secondary" className="w-full">
                  Let’s work together <ArrowRight className="size-4" />
                </LinkButton>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <main id="content">{children}</main>

      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
        <Container className="py-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logos.png"
                  alt={`${profile.shortName} logo`}
                  className="h-12 w-12 rounded-xl object-contain"
                />
                <div>
                  <p className="text-sm font-bold">{profile.name}</p>
                  <p className="text-xs text-slate-600">{profile.roleSummary}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                I help teams ship the right product, reduce execution risk, and build durable growth.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Quick links</p>
              <ul className="mt-3 grid gap-2 text-sm">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link className="text-slate-600 hover:text-slate-900" to={n.to}>
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Connect</p>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900" href={socials.email}>
                  <Mail className="size-4" /> {profile.email}
                </a>
                <a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900" href={socials.phone}>
                  <Phone className="size-4" /> {profile.phoneDisplay}
                </a>
                <a
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <SocialIcon href={socials.linkedin} label="LinkedIn">
                  <Linkedin className="size-4" />
                </SocialIcon>
                <SocialIcon href={socials.twitter} label="X">
                  <Twitter className="size-4" />
                </SocialIcon>
                <SocialIcon href={socials.youtube} label="YouTube">
                  <Youtube className="size-4" />
                </SocialIcon>
                <SocialIcon href={socials.instagram} label="Instagram">
                  <Instagram className="size-4" />
                </SocialIcon>
                <SocialIcon href={socials.github} label="GitHub">
                  <Github className="size-4" />
                </SocialIcon>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
            <p>
              Built by Avals Technologies.
              <span className="mx-2">•</span>
              <a className="hover:text-slate-700" href={socials.businessContactEmail}>
                Contact
              </a>
            </p>
          </div>
        </Container>
      </footer>

      <FloatingContact />
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: React.PropsWithChildren<{ href: string; label: string }>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-900"
    >
      {children}
    </a>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center justify-center rounded-2xl bg-emerald-600 p-3 text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-700"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-5" />
        <span className="ml-0 w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-24 group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-800 shadow-lg transition hover:bg-slate-50"
        aria-label="Open LinkedIn"
      >
        <Linkedin className="size-5" />
      </a>
    </div>
  );
}

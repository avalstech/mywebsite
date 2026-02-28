import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6", className)}>{children}</div>;
};

export const Section: React.FC<
  React.PropsWithChildren<{ className?: string; id?: string }>
> = ({ className, id, children }) => {
  return (
    <section id={id} className={cn("py-14 sm:py-18", className)}>
      {children}
    </section>
  );
};

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}> = ({ eyebrow, title, description, className }) => {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
};

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

export const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700",
        className
      )}
    >
      {children}
    </span>
  );
};

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "sm" | "md";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-sm",
    };
    const variants = {
      primary: "bg-slate-900 text-white hover:bg-slate-700 shadow-sm shadow-slate-900/20",
      secondary:
        "bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-600/20",
      ghost: "bg-transparent text-slate-900 hover:bg-slate-100/80",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

type LinkButtonProps = {
  to: string;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
  };
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-700 shadow-sm shadow-slate-900/20",
    secondary: "bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-600/20",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100/80",
  };

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </Link>
  );
};

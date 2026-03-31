import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "accent";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-zinc-800",
  outline: "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-zinc-50",
  accent: "bg-[var(--color-blue)] text-white hover:bg-[#356fd1]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

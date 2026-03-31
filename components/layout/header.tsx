import Link from "next/link";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-wide">
          MLRC MITS
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

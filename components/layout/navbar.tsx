import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="text-sm font-bold tracking-wide text-black">
          MLRC · MITS Gwalior
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ButtonLink href="/join" variant="primary">
              Join Us
            </ButtonLink>
          </div>

          <details className="md:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm font-semibold text-black">
              Menu
            </summary>
            <div className="absolute right-4 top-14 z-50 w-[calc(100%-2rem)] max-w-xs rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-zinc-800 transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <ButtonLink href="/join" variant="primary" className="w-full">
                    Join Us
                  </ButtonLink>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}


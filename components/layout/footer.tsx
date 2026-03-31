import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <Container className="flex flex-col gap-2 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>ML Research Club, MITS Gwalior</p>
        <p>Built for accessible, open ML learning.</p>
      </Container>
    </footer>
  );
}

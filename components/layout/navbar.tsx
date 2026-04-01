"use client";

import { usePathname } from "next/navigation";
import BubbleMenu from "@/components/ui/bubble-menu";
import PillNav from "@/components/ui/pill-nav";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: 'Home', href: '/', rotation: -8, hoverStyles: { bgColor: '#f8fafc', textColor: '#334155' } },
  { label: 'About', href: '/about', rotation: 8, hoverStyles: { bgColor: '#f8fafc', textColor: '#334155' } },
  { label: 'Events', href: '/events', rotation: 8, hoverStyles: { bgColor: '#f8fafc', textColor: '#334155' } },
  { label: 'Resources', href: '/resources', rotation: -8, hoverStyles: { bgColor: '#f8fafc', textColor: '#334155' } }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-[var(--color-border)] bg-white/80 backdrop-blur">
      <Container className="relative min-h-[64px] overflow-visible py-3">
        <div className="relative min-h-[48px] w-full md:flex md:items-start md:justify-between md:gap-4">
          <div className="relative min-h-[48px] w-full md:w-auto md:flex-1">
            <div className="hidden md:block w-full">
              <PillNav
                logo="/mlrc-logo.jpeg"
                logoAlt="ML Research Club"
                items={navItems}
                activeHref={pathname}
                ease="power2.easeOut"
                initialLoadAnimation={false}
                baseColor="#f8fafc"
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#334155"
              />
            </div>
            <div className="block md:hidden w-full">
              <BubbleMenu
                logo="/mlrc-logo.jpeg"
                items={navItems}
              />
            </div>
          </div>
          <div className="hidden shrink-0 pt-1 md:block">
            <ButtonLink href="/join" variant="primary">
              Join Us
            </ButtonLink>
          </div>
        </div>
        <div className="mt-14 md:hidden">
          <ButtonLink href="/join" variant="primary" className="w-full">
            Join Us
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

"use client";

import React, { ReactNode, useEffect, useRef } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "yellow";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

// Google-like primary hues for the spotlight glow.
const glowColorMap: Record<
  NonNullable<GlowCardProps["glowColor"]>,
  { base: number; spread: number }
> = {
  blue: { base: 217, spread: 50 },
  purple: { base: 280, spread: 50 },
  green: { base: 137, spread: 50 },
  red: { base: 5, spread: 50 },
  yellow: { base: 45, spread: 50 },
};

const sizeMap: Record<NonNullable<GlowCardProps["size"]>, string> = {
  sm: "w-full min-h-[16rem]",
  md: "w-full min-h-[20rem]",
  lg: "w-full min-h-[24rem]",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersHover = window.matchMedia("(hover: hover)").matches;

    if (!prefersHover) return;

    const syncPointer = (e: PointerEvent) => {
      const el = cardRef.current;
      if (!el) return;

      const { clientX: x, clientY: y } = e;
      const rect = el.getBoundingClientRect();
      const xPos = x - rect.left;
      const yPos = y - rect.top;

      if (rect.width <= 0 || rect.height <= 0) return;

      el.style.setProperty("--x", xPos.toFixed(2));
      el.style.setProperty("--xp", (xPos / rect.width).toFixed(2));
      el.style.setProperty("--y", yPos.toFixed(2));
      el.style.setProperty("--yp", (yPos / rect.height).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles = {
      // Used by the inline radial-gradient.
      "--base": base,
      "--spread": spread,
      "--radius": "16",
      "--border": "1",
      "--backdrop": "#ffffff",
      "--backup-border": "#e5e7eb",
      "--size": "300",
      "--outer": "1",
      "--border-size": "calc(var(--border, 1) * 1px)",
      "--spotlight-size": "calc(var(--size, 300) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 90% 90% / 0.8), transparent
      )`,
      backgroundColor: "var(--backdrop, white)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative" as const,
      touchAction: "pan-y" as const,
    };

    if (width !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (baseStyles as any).width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (baseStyles as any).height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow-light]::before,
    [data-glow-light]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: local;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }

    [data-glow-light]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 80% 60% / 0.4), transparent 100%
      );
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow-light
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          rounded-2xl
          relative
          flex flex-col
          shadow-sm hover:shadow-md transition-shadow duration-300
          p-6
          gap-4
          overflow-hidden
          ${className}
        `}
      >
        <div className="z-10 relative flex flex-col h-full w-full">
          {children}
        </div>
      </div>
    </>
  );
}


"use client";

import React, { ReactNode, useRef, useState } from "react";

export interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "yellow";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

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
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    
    // Dynamically grab coordinates for either a physical mouse or a raw touch
    const isTouch = e.type.startsWith("touch");
    const clientX = isTouch ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = isTouch ? (e as React.TouchEvent).touches[0].clientY : (e as React.MouseEvent).clientY;
    
    setPosition({ 
      x: clientX - rect.left, 
      y: clientY - rect.top 
    });
    
    // Only turn on the glow AFTER we have locked the exact coordinates
    setOpacity(1); 
  };

  const handleLeave = () => setOpacity(0);

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const customStyles: React.CSSProperties = {
    // Keep standard backdrop style so it matches previous visuals if possible
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
  };

  if (width !== undefined) {
    customStyles.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height !== undefined) {
    customStyles.height = typeof height === "number" ? `${height}px` : height;
  }

  // Adjust background conditionally if there is dark mode (assuming some classes might be used)
  // Let's use the old color base for the spotlight color
  let baseColor = "rgba(148, 163, 184, 0.15)";
  if (glowColor === "blue") baseColor = "rgba(59, 130, 246, 0.35)";
  else if (glowColor === "purple") baseColor = "rgba(168, 85, 247, 0.35)";
  else if (glowColor === "green") baseColor = "rgba(34, 197, 94, 0.35)";
  else if (glowColor === "red") baseColor = "rgba(239, 68, 68, 0.35)";
  else if (glowColor === "yellow") baseColor = "rgba(234, 179, 8, 0.35)";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleLeave}
      onTouchStart={handleMove}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      onTouchCancel={handleLeave}
      style={customStyles}
      className={`
        ${getSizeClasses()}
        rounded-2xl
        relative
        flex flex-col
        shadow-sm hover:shadow-md transition-shadow duration-300
        p-6
        gap-4
        overflow-hidden
        dark:bg-[#0a0a0a] dark:border-[#222] dark:text-white
        ${className}
      `}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${baseColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
